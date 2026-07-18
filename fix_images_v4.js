const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, 'content', 'articles');

if (!fs.existsSync(contentDir)) {
  console.error("Directory not found:", contentDir);
  process.exit(1);
}

const files = fs.readdirSync(contentDir).filter(file => file.endsWith('.md'));

let index = 1;

files.forEach(file => {
  const filePath = path.join(contentDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  
  if (match) {
    let frontmatter = match[1];
    // Using loremflickr with lock to guarantee 50 unique images related to family/senior
    const newImage = `https://loremflickr.com/1000/600/family,elderly,care?lock=${index}`;
    
    index++;
    
    if (frontmatter.includes('image:')) {
      frontmatter = frontmatter.replace(/image:.*(\r?\n|$)/, `image: "${newImage}"\n`);
    } else {
      frontmatter += `\nimage: "${newImage}"`;
    }
    
    content = content.replace(/^---\n[\s\S]*?\n---/, `---\n${frontmatter}\n---`);
    fs.writeFileSync(filePath, content, 'utf8');
  }
});

console.log("All 50 unique images applied using LoremFlickr with locks!");
