import path from 'path'
import fse from 'fs-extra'

const targetDir = path.join(__dirname, '../../docs')

export function writeDoc(filePath, issueData) {
    return fse.writeFile(filePath, `# ${issueData.title}\n${issueData.body}`)
}

export async function removeDoc(number) {
    const files = await fse.readdir(targetDir)
    for (let file of files) {
        if (file === number + '.md') {
            await fse.remove(path.join(targetDir, file))
        }
    }
}

export async function cleanDoc() {
    const files = await fse.readdir(targetDir)
    const promises = []
    for (let file of files) {
        if (path.extname(file) === '.md' && file !== 'index.md') {
            promises.push(fse.remove(path.join(targetDir, file)))
        }
    }
    await Promise.all(promises)
}
