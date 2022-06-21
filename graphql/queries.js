import { gql } from '@apollo/client'

const getAllPosts = gql`
	query getAllPosts {
        posts {
            id
            name
            content
            genre
            author {
              id
              name
              age
              posts{
                name
              }
            }
          }
	}
`

const getPostById =  gql`
query Query($postId: ID!) {
  post(id: $postId) {
    name
    id
    content
    genre
    author {
      id
      name
      age
    }
  }
}
`

export {getAllPosts,getPostById}
