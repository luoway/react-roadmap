import path from 'path'
import fse from 'fs-extra'
import { getIssue } from './utils/gh-issue.js'
import { writeDoc, removeDoc } from './utils/handle-doc.js'
import Sidebar from './utils/handle-sidebar.js'
import { number, labels, acceptLabels } from './utils/constants.js'

const targetDir = path.join(process.cwd(), 'docs')

const labelList = labels ? labels.split(',') : []
const renderLabels = labelList.filter((label) => acceptLabels.includes(label))

if (renderLabels.length === 0) {
    //remove
    removeDoc(number)
    Sidebar.remove(number)
}else{
    //add or update file
    const filePath = path.join(targetDir, `${number}.md`)
    const p1 = fse.ensureFile(filePath)
    const p2 = getIssue(number)
    await p1
    
    let issueData
    try {
        issueData = await p2
    } catch (e) {
        console.error(e)
        throw new Error('get issue fail.')
    }
    
    if (issueData) {
        writeDoc(filePath, issueData)
        Sidebar.update(issueData, renderLabels, acceptLabels)
    }
}
