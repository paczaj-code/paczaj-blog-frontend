import React from 'react';
import { useRouter } from 'next/router';

const ArticlesByCategory = () => {
  const router = useRouter();

  return <div>{router.query['category-slug']}</div>;
};

export default ArticlesByCategory;
