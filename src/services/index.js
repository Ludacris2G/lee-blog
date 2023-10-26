import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query PostsQuery {
      postsConnection {
        edges {
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const response = await request(graphqlAPI, query);

  return response.postsConnection.edges;
};

export const getRecentPosts = async () => {
  const query = gql`
    query GetRecentPostsQuery() {
        posts(
            orderBy: createdAt_ASC
            last: 3
        ) {
            title
            featuredImage {
                url
            }
            createdAt
            slug
        }
    }`;

  const response = await request(graphqlAPI, query);

  return response.posts;
};

export const getSimilarPosts = async () => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {
          slug_not: $slug
          AND: { categories_some: { slug_in: $categories } }
        }
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
};

export const getCategories = async () => {
  const query = gql`
        query getCategories {
            categories: {
                name
                slug
            }
        }
    `;

  const result = await request(graphqlAPI, query);
};
