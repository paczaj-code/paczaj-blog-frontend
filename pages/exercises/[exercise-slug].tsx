import React from 'react';
import { useRouter } from 'next/router';

const ExercisesByCategory = () => {
  const router = useRouter();

  return <div>{router.query['exercise-slug']}</div>;
};

export default ExercisesByCategory;
