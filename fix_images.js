const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, 'content', 'articles');

if (!fs.existsSync(contentDir)) {
  console.error("Directory not found:", contentDir);
  process.exit(1);
}

const files = fs.readdirSync(contentDir).filter(file => file.endsWith('.md'));

// Uma lista de keywords para gerar imagens únicas no Unsplash (cuidado, idoso, carinho, familia, terapia, saude)
const keywords = [
  "elderly,care", "senior,hands", "family,hug", "daughter,mother", 
  "grandma,love", "grandpa,care", "therapy,coffee", "mental,health", 
  "reading,senior", "walking,park,elderly", "medicine,care", "home,care",
  "holding,hands", "support,family", "dementia,care", "alzheimer,support",
  "caregiver,love", "senior,smiling", "daughter,helping", "doctor,senior"
];

let keywordIndex = 0;

files.forEach(file => {
  const filePath = path.join(contentDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Extrai o frontmatter
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  
  if (match) {
    let frontmatter = match[1];
    const kw = keywords[keywordIndex % keywords.length];
    const randomId = Math.floor(Math.random() * 10000);
    const newImage = `https://source.unsplash.com/featured/800x600/?${kw}&sig=${randomId}`;
    
    keywordIndex++;
    
    // Se já tem imagem, substitui
    if (frontmatter.includes('image:')) {
      frontmatter = frontmatter.replace(/image:.*(\r?\n|$)/, `image: "${newImage}"\n`);
    } else {
      // Se não tem, adiciona no final do frontmatter
      frontmatter += `\nimage: "${newImage}"`;
    }
    
    content = content.replace(/^---\n[\s\S]*?\n---/, `---\n${frontmatter}\n---`);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated image for ${file}`);
  }
});

console.log("All images updated successfully!");
