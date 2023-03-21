import { Item, List } from './NewsList.styled';
import { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import axios from 'axios';
// import newsData from './newsData.js';
import NewsCard from 'components/NewsCard';

const NewsList = ({ searchWord }) => {
  const [news, setNews] = useState([]);
  const [searchNews, setSearchNews] = useState([]);
  // const [notFound, setNotFound] = useState('');

  useEffect(() => {
    const getNews = async () => {
      const response = await axios.get(
        'https://tiny-hare-cowboy-hat.cyclic.app/api/news'
      );
      // console.log('response', response);
      const data = response.data.result;
      data.sort(function (a, b) {
        const dateA = a.date ? new Date(a.date) : new Date(0);
        const dateB = b.date ? new Date(b.date) : new Date(0);
        return dateB - dateA;
      });
      //   console.log('data===', data);
      setNews(data);
    };
    getNews();

    // Сортуємо масив в порядку спадання дат
    // newsData.sort(function (a, b) {
    //   const dateA = a.date ? new Date(a.date) : new Date(0);
    //   const dateB = b.date ? new Date(b.date) : new Date(0);
    //   return dateB - dateA;
    // });

    // setNews(newsData);
  }, []);

  useEffect(() => {
    // setNotFound('');
    const searchTitleNews = news.filter(item =>
      item.title.includes(searchWord)
    );
    if (searchTitleNews.length > 0) {
      return setSearchNews(searchTitleNews);
    }
    const searchDescriptionNews = news.filter(item =>
      item.description.includes(searchWord)
    );
    if (searchDescriptionNews.length > 0) {
      return setSearchNews(searchDescriptionNews);
    }
    if (
      searchTitleNews.length === 0 &&
      searchDescriptionNews.length === 0 &&
      searchWord
    ) {
      alert('AAAAAAA');
      // return setNotFound('Not found');
    }
  }, [news, searchWord]);
  // if (notFound) {
  //   return (
  //     <>
  //       <p>Not found</p>
  //     </>
  //   );
  // }
  if (searchNews.length > 0) {
    return (
      <List>
        {searchNews.map(item => (
          <Item
            key={item._id}
            // key={item.title}
          >
            <NewsCard {...item} />
          </Item>
        ))}
      </List>
    );
  }

  return (
    <List>
      {news.map(item => (
        <Item
          key={item._id}
          // key={item.title}
        >
          <NewsCard {...item} />
        </Item>
      ))}
    </List>
  );
};

NewsList.propTypes = {
  searchWord: propTypes.string.isRequired,
};

export default NewsList;
