const fs = require('fs');
const path = require('path');

const basePath = path.join(__dirname, 'src/app/business');
const dirs = fs.readdirSync(basePath).filter(f => fs.statSync(path.join(basePath, f)).isDirectory());

const targetButton = `<button className="bg-gray-900 text-white w-full sm:w-fit font-bold px-8 py-4 rounded-full text-center hover:bg-emerald-700 transition-colors shadow-lg">
                                Request Specification File
                            </button>`;

const newLink = `<a 
                                href="https://www.korgc.com/eng/cs/menu_03.html"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-900 text-white w-full sm:w-fit font-bold px-8 py-4 rounded-full text-center hover:bg-emerald-700 transition-colors shadow-lg block inline-block"
                            >
                                Request Specification File
                            </a>`;

dirs.forEach(dir => {
  const filePath = path.join(basePath, dir, 'page.tsx');
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    if (content.includes(targetButton)) {
      content = content.replaceAll(targetButton, newLink);
      fs.writeFileSync(filePath, content);
      console.log('Updated ' + filePath);
    }
  }
});
