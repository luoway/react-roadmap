import path from 'path'
import fse from 'fs-extra'
import { getIssues } from './utils/gh-issues-list.js'
import { getIssue } from './utils/gh-issue.js'
import { writeDoc, cleanDoc } from './utils/handle-doc.js'
import GithubLink from './utils/handle-link.js'
import Sidebar from './utils/handle-sidebar.js'
import { acceptLabels } from './utils/constants.js'

const targetDir = path.join(process.cwd(), 'docs')

const p = cleanDoc()
let issues = []

try {
    issues = await getIssues(acceptLabels)
} catch (e) {
    console.error(e)
    throw new Error('get issues fail.')
}
await p

issues.forEach(async (item) => {
    const node = item.node
    const filePath = path.join(targetDir, `${node.number}.md`)
    const p1 = fse.ensureFile(filePath)
    const p2 = getIssue(node.number)
    await p1
    const issueData = await p2
    writeDoc(filePath, issueData)
})

console.log(
    'issues number: ',
    issues.map((item) => item.node.number)
)
Sidebar.write(issues, acceptLabels)
GithubLink.write()
