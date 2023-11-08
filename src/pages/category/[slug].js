import { getCategories, getCategoryPosts, getPosts } from '@/services';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const CategoryPosts = ({ posts }) => {
  console.log(posts);
  return <div>h1</div>;
};

export default CategoryPosts;

export async function getStaticProps({ params }) {
  const posts = (await getCategoryPosts(params.slug)) || [];

  return {
    props: { posts },
  };
}

export async function getStaticPaths() {
  const categories = await getCategories();

  return {
    paths: categories.map(({ slug }) => ({
      params: {
        slug,
      },
    })),
    fallback: true,
  };
}
