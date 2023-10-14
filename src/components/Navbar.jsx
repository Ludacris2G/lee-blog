import { useContext } from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='bg-zinc-600 container mx-auto px-10 mb-8'>
      <div className='border-b w-full inline-block border-blue-400 py-8'>
        <Link href='/'>
          <span className="cursor-pointer font-bold text-4xl text-white">Lee's Blog</span>
        </Link>
      </div>
      <div className="hidden md:float-left md:contents">
        <h1 className=''></h1>
      </div>
    </div>
  );
};

export default Navbar;
