import NewsList from '../NewsList';
import { useState } from 'react';
import Container from 'components/Container';
import InputNewsFindPet from '../NewsSearch';
import PageTitle from 'components/UIKit/PageTitle';
const News = () => {
  const [searchWord, setSearchWord] = useState('');

  return (
    <Container>
      <PageTitle>News</PageTitle>
      <InputNewsFindPet setSearchWord={setSearchWord} />
      <NewsList searchWord={searchWord} />
    </Container>
  );
};

export default News;
