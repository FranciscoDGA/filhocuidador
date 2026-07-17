const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, 'content/articles');
const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'));

const goodImages = [
  'https://images.unsplash.com/photo-1516728778615-2d590ea1855e?w=800&q=80',
  'https://images.unsplash.com/photo-1518152006812-edab27b069fa?w=800&q=80',
  'https://images.unsplash.com/photo-1476610182048-b716b8518aae?w=800&q=80',
  'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80',
  'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&q=80',
  'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800&q=80',
  'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&q=80',
  'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80',
  'https://images.unsplash.com/photo-1470115636492-6d2b56f9146d?w=800&q=80',
  'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=800&q=80'
];

files.forEach((file, index) => {
  const filePath = path.join(contentDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Pick an image sequentially
  const newImage = goodImages[index % goodImages.length];
  
  // Replace the image line in the frontmatter
  // Assuming format: image: "https://..."
  if (content.match(/^image:\s*".*?"/m)) {
    content = content.replace(/^image:\s*".*?"/m, `image: "${newImage}"`);
  } else {
    // If no image line, add it before the first --- end block
    content = content.replace(/^(seo:)/m, `image: "${newImage}"\n$1`);
  }

  fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Fixed images for ' + files.length + ' articles.');
