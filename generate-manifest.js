import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const artProjectsPath = path.join(__dirname, 'static', 'images', 'art-projects');

const projects = {};

fs.readdirSync(artProjectsPath, { withFileTypes: true }).forEach((dirent) => {
	if (dirent.isDirectory()) {
		const projectName = dirent.name;
		const projectPath = path.join(artProjectsPath, projectName);
		let files = fs.readdirSync(projectPath).filter((file) => file.toLowerCase().endsWith('.jpg'));

		files.sort((a, b) => {
			const numA = parseInt(a.match(/\d+/)?.[0] || '0', 10);
			const numB = parseInt(b.match(/\d+/)?.[0] || '0', 10);
			return numA - numB;
		});

		projects[projectName] = files.map((file) => ({
			src: `/images/art-projects/${projectName}/${file}`,
			alt: `${projectName} artwork ${file}`
		}));
	}
});

const manifestFolder = path.join(__dirname, 'src', 'data');
if (!fs.existsSync(manifestFolder)) {
	fs.mkdirSync(manifestFolder, { recursive: true });
}

const manifestPath = path.join(manifestFolder, 'artProjects.json');
fs.writeFileSync(manifestPath, JSON.stringify(projects, null, 2));
console.log('Manifest generated at:', manifestPath);
