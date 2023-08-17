import path from 'path'
import fse from 'fs-extra'
import { repository } from './constants.js'

const githubLinkPath = path.join(
    __dirname,
    '../../docs/.vitepress/github-link.js'
)

function genGitUrl() {
    return `https://github.com/${repository}`
}

export default {
    write() {
        fse.ensureFileSync(githubLinkPath)
        fse.writeFileSync(githubLinkPath, `export default '${genGitUrl()}'`)
    }
}