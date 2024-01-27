import React from 'react';
import Moment from 'react-moment';
import PhotoCredits from './PhotoCredits';

const PostDetail = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }
      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }
      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
      if (text === undefined) {
        modifiedText = (
          <a className='text-blue-800' href={obj.href}>
            {obj.children[0].text}
          </a>
        );
        return modifiedText;
      }
    }

    switch (type) {
      case 'heading-three':
        return (
          <h3 key={index} className='text-xl font-semibold mb-4 px-2'>
            {modifiedText.map((item, i) => (
              <>{item}</>
            ))}
          </h3>
        );
      case 'paragraph':
        return (
          <p key={index} className='mb-8 px-2'>
            {modifiedText.map((item, i) => (
              <>{item}</>
            ))}
          </p>
        );
      case 'code-block':
        return (
          <pre key={index} className='bg-gray-200 p-4 overflow-x-auto'>
            <code>{modifiedText}</code>
          </pre>
        );
      case 'block-quote':
        return (
          <blockquote
            key={index}
            className='border-l-4 pl-4 italic text-gray-600'
          >
            {modifiedText.map((item, i) => (
              <>{item}</>
            ))}
          </blockquote>
        );
      case 'heading-four':
        return (
          <h4 key={index} className='text-md font-semibold mb-4 text-2xl px-2'>
            {modifiedText.map((item, i) => (
              <>{item}</>
            ))}
          </h4>
        );
      case 'image':
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };

  return (
    <div className='bg-white shadow-lg rounded-lg lg:px-8 lg:py-1 mb-8'>
      <div className='relative overflow-hidden shadow-md mb-6'>
        <PhotoCredits />
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className='object-top h-full w-full rounded-t-lg'
        />
      </div>
      <div className='px-4 lg:px-0 flex align-middle'>
        <div className='flex items-center mb-4  lg:mb-0 w-full lg:w-auto mr-8'>
          <img
            className='h-[30px] w-[30px] align-middle rounded-full'
            src={post.author.photo.url}
            alt={post.author.name}
          />
          <p className='inline align-middle text-gray-700 ml-2 text-lg'>
            {post.author.name}
          </p>
        </div>
        <div className='font-medium text-gray-700 flex justify-center items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth='1.5'
            stroke='currentColor'
            className='flex justify-center align-middle h-[25px]'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z'
            />
          </svg>
          <span className='text-center align-middle'>
            {<Moment format='MMM DD, YYYY'>{post.createdAt}</Moment>}
          </span>
        </div>
      </div>
      <div className='px-3 pb-[1px]'>
        {/* container for padding ignoring img or banner above title */}
        <h1 className='mb-8 mt-6 text-3xl font-semibold px-2'>{post.title}</h1>
        {post?.content.raw.children.map((typeObj, index) => {
          const children = typeObj.children.map((item, itemIndex) =>
            getContentFragment(itemIndex, item.text, item)
          );
          return getContentFragment(index, children, typeObj, typeObj.type);
        })}
      </div>
    </div>
  );
};

export default PostDetail;
