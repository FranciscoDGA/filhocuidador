import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "Filho Cuidador";
  const category = searchParams.get("category") || "";

  const titleSize = title.length > 60 ? 40 : 52;

  const html = `
    <div style="height:100%;width:100%;display:flex;flex-direction:column;justify-content:flex-end;padding:60px;background-color:#fafaf8;font-family:sans-serif;position:relative">
      <div style="position:absolute;top:60px;left:60px;display:flex;align-items:center;gap:12px">
        <div style="width:48px;height:48px;background-color:#1a1a1a;display:flex;align-items:center;justify-content:center;border-radius:8px">
          <span style="color:white;font-size:24px;font-weight:600">F</span>
        </div>
        <span style="font-size:20px;color:#1a1a1a;font-weight:600">Filho Cuidador</span>
      </div>
      ${category ? `<span style="font-size:16px;color:#8b7355;text-transform:uppercase;letter-spacing:0.15em;margin-bottom:16px">${category}</span>` : ""}
      <span style="font-size:${titleSize}px;color:#1a1a1a;font-weight:500;line-height:1.2;max-width:900px">${title}</span>
      <div style="position:absolute;bottom:60px;right:60px;display:flex;align-items:center;gap:8px">
        <span style="font-size:14px;color:#999">filhocuidador.com.br</span>
      </div>
    </div>
  `;

  return new ImageResponse(
    // @ts-expect-error ImageResponse accepts HTML string
    html,
    {
      width: 1200,
      height: 630,
    }
  );
}
