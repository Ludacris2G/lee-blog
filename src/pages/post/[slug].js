import Author from '@/components/Author';
import Categories from '@/components/Categories';
import Comments from '@/components/Comments';
import CommentsForm from '@/components/CommentsForm';
import Loader from '@/components/Loader';
import PostDetail from '@/components/PostDetail';
import PostWidget from '@/components/PostWidget';
import { getPosts, getPostDetails } from '@/services';
import { useRouter } from 'next/router';

const PostDetails = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div className='container mx-auto lg:px-10 px-3 mb-8'>
      <div className='background-container'></div>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-3'>
        <div className='col-span-1 lg:col-span-8'>
          <PostDetail post={post} />
          <Author author={post.author} />
          <CommentsForm slug={post.slug} />
          <Comments slug={post.slug} />
        </div>
        <div className='col-span-1 lg:col-span-4'>
          <div className='relative lg:sticky top-8'>
            <PostWidget
              slug={post.slug}
              categories={post.categories.map((category) => category.slug)}
            />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;

export async function getStaticProps({ params }) {
  const data = (await getPostDetails(params.slug)) || [];

  return { props: { post: data } };
}

export async function getStaticPaths() {
  const posts = await getPosts();

  return {
    paths: posts.map(({ node: { slug } }) => ({
      params: {
        slug,
      },
    })),
    fallback: true,
  };
}
