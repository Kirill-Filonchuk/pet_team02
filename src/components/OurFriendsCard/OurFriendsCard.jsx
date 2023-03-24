import propTypes from 'prop-types';
import {
  Title,
  FriendsContainer,
  Image,
  ContactContainer,
  Link,
} from './OurFriendsCard.styled';

const OurFriendsCard = ({
  address,
  addressUrl,
  email,
  imageUrl,
  phone,
  title,
  url,
  workDays,
}) => {
  const titleCounter = title => {
    const lengthTitle = 23;
    if (title.length > lengthTitle) {
      const titleSlice = title.slice(0, lengthTitle);
      return `${titleSlice}...`;
    }
    return title;
  };
  return (
    <>
      <Title>{titleCounter(title)}</Title>
      <FriendsContainer>
        <Image alt={title} src={imageUrl} />
        <ContactContainer>
          <Link>
            Time:
            <br />
            8:00- 20:00
          </Link>
          <Link href={addressUrl}>
            Adress: <br />
            {address}
          </Link>
          <Link>
            Email: <br />
            {email}
          </Link>
          <Link>
            Phone: <br />
            {phone}
          </Link>
        </ContactContainer>
      </FriendsContainer>
    </>
  );
};

OurFriendsCard.propTypes = {
  //   title: propTypes.string.isRequired,
  //   url: propTypes.string.isRequired,
  //   description: propTypes.string.isRequired,
  //   date: propTypes.string,
};

export default OurFriendsCard;
