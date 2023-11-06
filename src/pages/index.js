import CarouselSlider from '@/components/Carousel';
import Categories from '@/components/Categories';
import PostCard from '@/components/PostCard';
import PostWidget from '@/components/PostWidget';
import { getPosts } from '@/services';
import Head from 'next/head';

export default function Home({ posts }) {
  return (
    <div className='container mx-auto px-10 mb-8'>
      <Head>
        <title>Lee's blog</title>
      </Head>
      <div className='background-container'></div>
      <CarouselSlider />
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='col-span-1 lg:col-span-8'>
          {posts.map((post, i) => (
            <PostCard post={post.node} key={post.node.title} />
          ))}
        </div>
        <div className='col-span-1 lg:col-span-4'>
          <div className='relative top-8 lg:sticky'>
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}
