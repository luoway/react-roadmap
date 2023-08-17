import path from 'path'
import fse from 'fs-extra'

export let acceptLabels = []
try {
    const labelrc = fse.readFileSync(
        path.join(process.cwd(), '.labelrc'),
        'utf-8'
    )
    acceptLabels = labelrc.split(/\r|\n/).filter(Boolean)
} catch (e) {
    console.error('acceptLabels load fail.', e)
}

export const token = process.env.GITHUB_TOKEN
export const owner = process.env.GITHUB_OWNER
export const repository = process.env.GITHUB_REPO
export const repoName = process.env.GITHUB_REPO.split('/')[1]
export const number = process.env.GITHUB_ISSUE_NUMBER
export const action = process.env.GITHUB_EVENT_ACTION
export const labels = process.env.GITHUB_ISSUE_LABELS
export const actionLabel = process.env.GITHUB_ISSUE_LABEL