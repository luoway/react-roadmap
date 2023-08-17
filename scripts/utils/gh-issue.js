import { graphqlWithAuth } from './gh.js'
import { owner, repoName } from './constants.js'

export async function getIssue(number) {
    const { repository } = await graphqlWithAuth(`
        {
            repository(owner: "${owner}", name: "${repoName}") {
                issue(number: ${number}){
                    number
                    title
                    labels(first: 100) {
                        nodes {
                            name
                        }
                    }
                    createdAt
                    body
                }
            }
        }
    `)
    return repository.issue
}