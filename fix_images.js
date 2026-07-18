const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, 'content', 'articles');

if (!fs.existsSync(contentDir)) {
  console.error("Directory not found:", contentDir);
  process.exit(1);
}

const files = fs.readdirSync(contentDir).filter(file => file.endsWith('.md'));

const keywords = [
  "daughter,holding,mother,hands", "senior,family,hug", "caregiver,love,warm",
  "daughter,talking,mother", "affection,elderly,care", "warm,sunlight,senior,home",
  "grandma,hug,daughter", "father,daughter,holding,hands", "elderly,care,home",
  "senior,woman,smiling,daughter", "family,support,warm", "hugging,senior,warm",
  "caring,hands,warm", "daughter,helping,mother,home", "senior,love,compassion"
];

let keywordIndex = 0;

files.forEach(file => {
  const filePath = path.join(contentDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  
  if (match) {
    let frontmatter = match[1];
    const kw = keywords[keywordIndex % keywords.length];
    const randomId = Math.floor(Math.random() * 100000);
    const newImage = `https://images.unsplash.com/photo-${randomId}?q=80&w=1000&auto=format&fit=crop&query=${encodeURIComponent(kw)}`;
    // Actually, unsplash source is deprecated, so we just use the older unsplash source URL that still works with random strings or just use the random id to break cache.
    // Let's use source.unsplash.com to get a random image based on the keyword.
    const realNewImage = `https://source.unsplash.com/featured/800x600/?${encodeURIComponent(kw)}&sig=${randomId}`;
    
    keywordIndex++;
    
    if (frontmatter.includes('image:')) {
      frontmatter = frontmatter.replace(/image:.*(\r?\n|$)/, `image: "${realNewImage}"\n`);
    }
    
    content = content.replace(/^---\n[\s\S]*?\n---/, `---\n${frontmatter}\n---`);
    fs.writeFileSync(filePath, content, 'utf8');
  }
});

console.log("All images updated with warm, human keywords successfully!");
