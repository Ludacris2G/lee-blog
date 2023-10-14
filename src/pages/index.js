import Categories from '@/components/Categories';
import Navbar from '@/components/Navbar';
import PostCard from '@/components/PostCard';
import PostWidget from '@/components/PostWidget';
import Head from 'next/head';

const posts = [
  { title: 'testing', excerpt: 'Learn Next.js' },
  { title: 'testing', excerpt: 'Learn Next.js' },
  { title: 'testing', excerpt: 'Learn Next.js' },
  { title: 'testing', excerpt: 'Learn Next.js' },
  { title: 'testing', excerpt: 'Learn Next.js' },
];

export default function Home() {
  return (
    <div className='container mx-auto px-10 mb-8'>
      <Head>
        <title>Lee's blog</title>
      </Head>
      <Navbar />
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='col-span-1 lg:col-span-8'>
          {posts.map((post, i) => (
            <PostCard post={post} key={post.title} />
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
