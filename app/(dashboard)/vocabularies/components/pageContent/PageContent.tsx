'use client';
import { FC } from 'react';

import { useGetVocabularies } from '@/hooks/api';
import Loading from '@/components/ui/loading';

const PageContent: FC = () => {
  const {
    isLoading,
    data: vocabularies,
  } = useGetVocabularies();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <p>PageContent work</p>
      <p>PageContent work</p>
    </>
  );
};

export default PageContent;
