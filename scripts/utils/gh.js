import { graphql } from '@octokit/graphql'
import { token } from './constants.js'

export const graphqlWithAuth = graphql.defaults({
    headers: {
        authorization: `token ${token}`,
    },
})