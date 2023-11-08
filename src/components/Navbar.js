import { getCategories } from '@/services';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const categories = await getCategories();

    if (categories) {
      setCategories(categories);
    }
  };
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
          {categories &&
            categories.map((category) => (
              <Link href={`/category/${category.slug}`} key={category.slug}>
                <span className='md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>
                  {category.name}
                </span>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
