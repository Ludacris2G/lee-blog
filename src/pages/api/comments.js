import { GraphQLClient, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
const graphcmsToken = process.env.GRAPHCMS_TOKEN;

export default async function comments(req, res) {
  const { name, email, slug, comment } = JSON.parse(req.body);
  console.log(name, email, slug, comment);
  console.log(req.body);

  const qraphQLClient = new GraphQLClient(graphqlAPI, {
    headers: {
      authorization: `Bearer ${graphcmsToken}`,
    },
  });

  const query = gql`
    mutation CreateComment(
      $name: String!
      $email: String!
      $comment: String!
      $slug: String!
    ) {
      createComment(
        data: {
          name: $name
          email: $email
          comment: $comment
          post: { connect: { slug: $slug } }
        }
      ) {
        post {
          title
        }
      }
    }
  `;

  try {
    const result = await qraphQLClient.request(query, JSON.parse(req.body));

    return res.status(200).send(result);
  } catch (error) {
    return res.status(500).send(error);
  }
}
