import Image from 'next/image';

const Author = ({ author }) => {
  console.log(author);
  return (
    <div className='text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20'>
      <div className='absolute -top-14 left-[50%] translate-x-[-50%]'>
        <Image
          className='h-[100px] w-[100px] object-cover rounded-full'
          width={100}
          height={100}
          src={author.photo.url}
          alt={author.name}
          unoptimized
        />
      </div>
      <h3 className='text-white text-xl font-bold'>{author.name}</h3>
      <p className='text-white text-lg'>{author.bio}</p>
    </div>
  );
};

export default Author;
