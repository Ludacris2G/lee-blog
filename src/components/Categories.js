import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getCategories } from '@/services';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetchCategories();
  }, []);
  const fetchCategories = async () => {
    const categories = await getCategories();
    setCategories(categories);
  };
  
  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>Categories</h3>
      {categories &&
        categories.map((category) => (
          <Link key={category.slug} href={`/category/${category.slug}`}>
            <span className='cursor-pointer block pb-3 mb-3'>
              {category.name}
            </span>
          </Link>
        ))}
    </div>
  );
};

export default Categories;
