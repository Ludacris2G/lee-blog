import { Inter } from 'next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

const posts = [
  { title: 'testing', excerpt: 'Learn Next.js' },
  { title: 'testing', excerpt: 'Learn Next.js' },
  { title: 'testing', excerpt: 'Learn Next.js' },
  { title: 'testing', excerpt: 'Learn Next.js' },
  { title: 'testing', excerpt: 'Learn Next.js' },
];

export default function Home() {
  return (
    <div className='container mx-auto px-10 mb-8 bg-gray-300'>
      <Head>
        <title>Lee's blog</title>
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 bg-emerald-700'>
        <div className='col-span-1 lg:col-span-8'>
          {posts.map((post, i) => (
            <div className='text-center bg-blue-300' key={i}>
              {post.title}
              {post.excerpt}
            </div>
          ))}
        </div>
        <div className='col-span-1 lg:col-span-4 bg-emerald-900'>
          <div className='lg:sticky relative top-8'>hi</div>
        </div>
      </div>
    </div>
  );
}
