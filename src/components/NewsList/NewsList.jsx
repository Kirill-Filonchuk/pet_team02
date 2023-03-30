import { Item, List, CatIcon, IconContainer } from './NewsList.styled';
import { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import axios from 'axios';
import NewsCard from 'components/NewsCard';

const NewsList = ({ searchWord }) => {
  const [news, setNews] = useState([]);
  const [searchNews, setSearchNews] = useState([]);
  const [showCat, setShowCat] = useState(false);

  useEffect(() => {
    const getNews = async () => {
      try {
        const response = await axios.get(
          'https://tiny-hare-cowboy-hat.cyclic.app/api/news'
        );
        const data = response.data.result;
        data.sort(function (a, b) {
          const dateA = a.date ? new Date(a.date) : new Date(0);
          const dateB = b.date ? new Date(b.date) : new Date(0);
          return dateB - dateA;
        });
        setNews(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getNews();
  }, []);

  useEffect(() => {
    const searchTitleNews = news.filter(item =>
      item.title.toLowerCase().includes(searchWord.toLowerCase())
    );
    if (searchTitleNews.length > 0) {
      setShowCat(false);
      return setSearchNews(searchTitleNews);
    }
    const searchDescriptionNews = news.filter(item =>
      item.description.toLowerCase().includes(searchWord.toLowerCase())
    );
    if (searchDescriptionNews.length > 0) {
      setShowCat(false);
      return setSearchNews(searchDescriptionNews);
    }
    if (
      searchTitleNews.length === 0 &&
      searchDescriptionNews.length === 0 &&
      searchWord &&
      !showCat
    ) {
      setShowCat(true);
    }
  }, [news, searchWord, showCat]);

  if (searchNews.length > 0) {
    return (
      <>
        {(showCat && (
          <IconContainer>
            <CatIcon />
          </IconContainer>
        )) || (
          <List>
            {searchNews.map(item => (
              <Item key={item._id}>
                <NewsCard {...item} />
              </Item>
            ))}
          </List>
        )}
      </>
    );
  }

  return (
    <List>
      {news.map(item => (
        <Item key={item._id}>
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
