import { getRecentPosts, getSimilarPosts } from '@/services';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Moment from 'react-moment';

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      );
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
  }, [slug]);
  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-4'>
      <h3 className='text-xl mb-6 font-semibold border-b pb-4'>
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>
      {relatedPosts &&
        relatedPosts.map((post) => (
          <div key={post.title} className='flex items-center w-full mb-4'>
            <div className='w-16 flex-none'>
              <img
                src={post.featuredImage.url}
                alt={post.title}
                className='w-[50px] h-[50px] align-middle rounded-full'
              />
            </div>
            <div className='flex-grow ml-4'>
              <p className='text-gray-500 font-xs'>
                {<Moment format='MMM DD, YYYY'>{post.createdAt}</Moment>}
              </p>
              <Link href={`/post/${post.slug}`}>{post.title}</Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PostWidget;
