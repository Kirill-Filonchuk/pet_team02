import NewsList from '../NewsList';
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Container from 'components/Container';
import InputNewsFindPet from '../NewsSearch';
import PageTitle from 'components/UIKit/PageTitle';
import { NewsWrapper } from './News.styled';
const News = () => {
  const [searchWord, setSearchWord] = useState('');

  return (
    <NewsWrapper>
      <Container>
        <PageTitle>News</PageTitle>
        <InputNewsFindPet setSearchWord={setSearchWord} />
        <NewsList searchWord={searchWord} />
      </Container>
    </NewsWrapper>
  );
};

export default News;
