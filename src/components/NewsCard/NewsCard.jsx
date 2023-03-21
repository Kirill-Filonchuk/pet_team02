import propTypes from 'prop-types';
import {
  Title,
  GradientContainer,
  Description,
  FooterContainer,
  DateText,
  Link,
} from './NewsCard.styled';
const NewsCard = ({ title, url, description, date }) => {
  const descriptionCounter = description => {
    const lengthDescription = 213;
    if (description.length > lengthDescription) {
      const descriptionSlice = description.slice(0, lengthDescription);
      return `${descriptionSlice} ...`;
    }
    return description;
  };
  const titleCounter = title => {
    const lengthTitle = 42;
    if (title.length > lengthTitle) {
      const titleSlice = title.slice(0, lengthTitle);
      return `${titleSlice} ...`;
    }
    return title;
  };
  const formatDate = dateStr => {
    if (!dateStr) {
      return '--/--/----';
    }
    const date = new Date(dateStr);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <>
      <GradientContainer />
      <Title>{titleCounter(title)}</Title>
      <Description>{descriptionCounter(description)}</Description>
      <FooterContainer>
        <DateText>{formatDate(date)}</DateText>
        <Link href={url} target="_blank">
          Read more
        </Link>
      </FooterContainer>
    </>
  );
};
NewsCard.propTypes = {
  title: propTypes.string.isRequired,
  url: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  date: propTypes.string,
};

export default NewsCard;
