import NewsList from '../NewsList';
import { useState } from 'react';
import { Title } from './News.styled';
import TempContainer from 'components/TempContainer';
import InputNewsFindPet from '../NewsSearch';
const News = () => {
  const [searchWord, setSearchWord] = useState('');

  return (
    <TempContainer>
      <Title>News</Title>
      <InputNewsFindPet setSearchWord={setSearchWord} />
      <NewsList searchWord={searchWord} />
    </TempContainer>
  );
};

export default News;
