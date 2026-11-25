export function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderInlineMarkdown(text: string): string {
  let html = escapeHtml(text);

  // Links [label](url) - allow only safe http(s), mailto, tel, or relative / paths
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_match, label: string, rawUrl: string) => {
    const url = rawUrl.trim();
    const isSafe =
      url.startsWith("/") ||
      url.startsWith("https://") ||
      url.startsWith("http://") ||
      url.startsWith("mailto:") ||
      url.startsWith("tel:");

    if (!isSafe) {
      return label;
    }

    const isExternal = url.startsWith("http://") || url.startsWith("https://");
    const extraAttrs = isExternal
      ? ' target="_blank" rel="noopener noreferrer"'
      : "";
    return `<a href="${escapeHtml(url)}"${extraAttrs} class="underline underline-offset-4 font-medium hover:opacity-80">${label}</a>`;
  });

  // Inline code `code`
  html = html.replace(
    /`([^`]+)`/g,
    '<code class="px-1.5 py-0.5 rounded bg-surface-subtle text-sm font-mono">$1</code>'
  );

  // Bold **text** or __text__
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong class="font-semibold">$1</strong>');
  html = html.replace(/__([^_]+)__/g, '<strong class="font-semibold">$1</strong>');

  // Italic *text* or _text_
  html = html.replace(/(^|[^*])\*([^*\n]+)\*/g, '$1<em class="italic">$2</em>');
  html = html.replace(/(^|[^_])_([^_\n]+)_/g, '$1<em class="italic">$2</em>');

  return html;
}

export function renderMarkdownToHtml(markdown: string): string {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const blocks: string[] = [];

  let i = 0;
  let skippedFirstH1 = false;

  while (i < lines.length) {
    const line = lines[i].trimEnd();
    const trimmed = line.trim();

    if (!trimmed) {
      i += 1;
      continue;
    }

    // Horizontal rule
    if (/^[-*_]{3,}$/.test(trimmed)) {
      blocks.push('<hr class="my-8 border-border-subtle" />');
      i += 1;
      continue;
    }

    // Headings
    const headingMatch = trimmed.match(/^(#{1,4})\s+(.+)$/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      const headingText = headingMatch[2].trim();

      if (level === 1 && !skippedFirstH1) {
        // The article template renders title in its own <h1>
        skippedFirstH1 = true;
        i += 1;
        continue;
      }

      const tag = level === 1 ? "h2" : `h${Math.min(level, 4)}`;
      const sizeClass =
        tag === "h2"
          ? "font-serif text-2xl sm:text-3xl font-bold mt-10 mb-4 text-ink-strong"
          : tag === "h3"
            ? "font-serif text-xl sm:text-2xl font-bold mt-8 mb-3 text-ink-strong"
            : "font-sans text-lg font-bold mt-6 mb-2 text-ink-strong";

      blocks.push(`<${tag} class="${sizeClass}">${renderInlineMarkdown(headingText)}</${tag}>`);
      i += 1;
      continue;
    }

    // Markdown tables
    if (
      trimmed.startsWith("|") &&
      i + 1 < lines.length &&
      /^\s*\|[\s:|-]+\|\s*$/.test(lines[i + 1])
    ) {
      const parseRow = (rowLine: string) =>
        rowLine
          .trim()
          .replace(/^\|/, "")
          .replace(/\|$/, "")
          .split("|")
          .map((cell) => cell.trim());

      const headers = parseRow(trimmed);
      i += 2; // Skip header & separator
      const rows: string[][] = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        rows.push(parseRow(lines[i]));
        i += 1;
      }

      const thead = `<thead><tr class="border-b border-border-subtle bg-surface-subtle">${headers
        .map(
          (h) =>
            `<th scope="col" class="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-ink-strong">${renderInlineMarkdown(h)}</th>`
        )
        .join("")}</tr></thead>`;

      const tbody = `<tbody>${rows
        .map(
          (row) =>
            `<tr class="border-b border-border-subtle">${row
              .map(
                (cell) =>
                  `<td class="px-4 py-3 text-sm text-ink-body align-top">${renderInlineMarkdown(cell)}</td>`
              )
              .join("")}</tr>`
        )
        .join("")}</tbody>`;

      blocks.push(
        `<div class="my-6 overflow-x-auto rounded-lg border border-border-subtle"><table class="w-full border-collapse text-left">${thead}${tbody}</table></div>`
      );
      continue;
    }

    // Blockquote
    if (trimmed.startsWith(">")) {
      const quoteLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith(">")) {
        quoteLines.push(lines[i].trim().replace(/^>\s?/, ""));
        i += 1;
      }
      blocks.push(
        `<blockquote class="my-6 border-l-4 border-brand-primary pl-4 py-1 text-ink-muted italic space-y-2">${quoteLines
          .map((ql) => `<p>${renderInlineMarkdown(ql)}</p>`)
          .join("")}</blockquote>`
      );
      continue;
    }

    // Unordered list or checklist (- [ ], - [x], - *, •)
    if (/^(?:[-*•])\s+/.test(trimmed)) {
      const items: string[] = [];
      while (i < lines.length && /^(?:[-*•])\s+/.test(lines[i].trim())) {
        const rawItem = lines[i].trim().replace(/^(?:[-*•])\s+/, "");
        const checkMatch = rawItem.match(/^\[( |x|X)\]\s*(.+)$/);
        if (checkMatch) {
          const checked = checkMatch[1].toLowerCase() === "x";
          const marker = checked
            ? '<span aria-hidden="true" class="inline-flex items-center justify-center w-4 h-4 rounded border border-brand-primary bg-brand-primary text-surface-card text-[10px] font-bold shrink-0 mt-1">✓</span>'
            : '<span aria-hidden="true" class="inline-block w-4 h-4 rounded border border-border-strong shrink-0 mt-1"></span>';
          items.push(
            `<li class="flex items-start gap-2.5">${marker}<span>${renderInlineMarkdown(checkMatch[2])}</span></li>`
          );
        } else {
          items.push(`<li>${renderInlineMarkdown(rawItem)}</li>`);
        }
        i += 1;
      }

      const isChecklist = items.some((it) => it.includes("flex items-start gap-2.5"));
      const listClass = isChecklist
        ? "my-5 space-y-2.5 list-none pl-0 text-ink-body"
        : "my-5 space-y-2 list-disc pl-6 text-ink-body";
      blocks.push(`<ul class="${listClass}">${items.join("")}</ul>`);
      continue;
    }

    // Ordered list
    if (/^\d+\.\s+/.test(trimmed)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i].trim())) {
        const rawItem = lines[i].trim().replace(/^\d+\.\s+/, "");
        items.push(`<li>${renderInlineMarkdown(rawItem)}</li>`);
        i += 1;
      }
      blocks.push(
        `<ol class="my-5 space-y-2 list-decimal pl-6 text-ink-body">${items.join("")}</ol>`
      );
      continue;
    }

    // Paragraph (collect consecutive non-special lines)
    const paraLines: string[] = [];
    while (i < lines.length) {
      const cur = lines[i].trim();
      if (
        !cur ||
        /^[-*_]{3,}$/.test(cur) ||
        /^(#{1,4})\s+/.test(cur) ||
        cur.startsWith(">") ||
        cur.startsWith("|") ||
        /^(?:[-*•])\s+/.test(cur) ||
        /^\d+\.\s+/.test(cur)
      ) {
        break;
      }
      paraLines.push(cur);
      i += 1;
    }

    if (paraLines.length > 0) {
      blocks.push(
        `<p class="my-4 text-base sm:text-[17px] leading-relaxed text-ink-body">${renderInlineMarkdown(
          paraLines.join(" ")
        )}</p>`
      );
    }
  }

  return blocks.join("\n");
}
