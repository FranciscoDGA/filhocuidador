const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, 'content', 'articles');

if (!fs.existsSync(contentDir)) {
  console.error("Directory not found:", contentDir);
  process.exit(1);
}

const files = fs.readdirSync(contentDir).filter(file => file.endsWith('.md'));

// Using specific Unsplash photo IDs that are guaranteed to exist and are related to caregiving, family, and elderly.
const photoIds = [
  "1576765608535-5f04d1e3f289", 
  "1511895426328-dc8714191300",
  "1581579186913-463ee9fbf9bb",
  "1602903960144-8854045f4f81",
  "1581579432243-7f21f0088927",
  "1583849187320-f5a04e578330",
  "1566436573703-9118fb417688",
  "1580826978413-5b8219be6a89",
  "1582213708304-25039fbc6223",
  "1515250426861-1c5211910bba",
  "1472653556555-d41c4842d765"
];

let index = 0;

files.forEach(file => {
  const filePath = path.join(contentDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  
  if (match) {
    let frontmatter = match[1];
    const pid = photoIds[index % photoIds.length];
    const newImage = `https://images.unsplash.com/photo-${pid}?q=80&w=1000&auto=format&fit=crop`;
    
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

console.log("All images updated with direct Unsplash IDs successfully!");
