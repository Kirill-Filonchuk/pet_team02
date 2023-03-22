import NewsList from '../NewsList';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Container from 'components/Container';
import InputNewsFindPet from '../NewsSearch';
import PageTitle from 'components/UIKit/PageTitle';
import { NewsWrapper } from './News.styled';
const News = () => {
  const [searchWord, setSearchWord] = useState('');
  const notify = message =>
    toast.error(message, {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });

  return (
    <NewsWrapper>
      <Container>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <PageTitle>News</PageTitle>
        <InputNewsFindPet setSearchWord={setSearchWord} />
        <NewsList notify={notify} searchWord={searchWord} />
      </Container>
    </NewsWrapper>
  );
};

export default News;
