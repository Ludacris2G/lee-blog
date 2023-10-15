import { useContext } from 'react';
import Link from 'next/link';

const categories = [
  { name: 'react', slug: 'react' },
  { name: 'web dev1', slug: 'web-dev1' },
  { name: 'web dev2', slug: 'web-dev2' },
  { name: 'web dev3', slug: 'web-dev3' },
  { name: 'web dev4', slug: 'web-de4v' },
];

const Navbar = () => {
  return (
    <div className='bg-zinc-600 container mx-auto px-10 mb-8'>
      <div className='border-b w-full inline-block border-blue-400 py-8'>
        <div className='md:float-left block'>
          <Link href='/'>
            <span className='cursor-pointer font-bold text-4xl text-white'>
              Lee's Blog
            </span>
          </Link>
        </div>
        <div className='hidden md:float-left md:contents'>
          <div>
            {categories.map((category) => (
              <Link key={category.slug} href={`category/${category.slug}`}>
                <span className='md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>
                  {category.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
