import propTypes from 'prop-types';
import {
  TitleContainer,
  TitleLink,
  FriendsContainer,
  Image,
  ContactList,
  ContactItem,
  Link,
  Address,
} from './OurFriendsCard.styled';

import defaultImage from 'assets/images/pets-default-image.jpg';

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
  const dashDottedLine = '-----------------------------------';
  // const titleCounter = title => {
  //   const lengthTitle = 23;
  //   if (title.length > lengthTitle) {
  //     const titleSlice = title.slice(0, lengthTitle);
  //     return `${titleSlice}...`;
  //   }
  //   return title;
  // };
  const contactCounter = contact => {
    if (!contact) {
      return dashDottedLine;
    }
    const lengthContact = 24;
    if (contact.length > lengthContact) {
      const contactSlice = contact.slice(0, lengthContact);
      return `${contactSlice}`;
    }
    return contact;
  };
  return (
    <>
      <TitleContainer>
        <TitleLink href={url} target="_blank">
          {title}
        </TitleLink>
      </TitleContainer>
      <FriendsContainer>
        <Image alt={title} src={imageUrl || defaultImage} />
        <ContactList>
          <ContactItem>
            <Link>
              Time:
              <br />
              8:00- 20:00
            </Link>
          </ContactItem>
          <ContactItem>
            <Link href={addressUrl || '#'} target={addressUrl && '_blank'}>
              Adress: <br />
              {address && <Address>{contactCounter(address)}</Address>}
              {!address && dashDottedLine}
            </Link>
          </ContactItem>
          <ContactItem>
            <Link href={`mailto:${email || '#'}`}>
              Email: <br />
              {contactCounter(email)}
            </Link>
          </ContactItem>
          <ContactItem>
            <Link href={`tel::${phone || '#'}`}>
              Phone: <br />
              {contactCounter(phone)}
            </Link>
          </ContactItem>
        </ContactList>
      </FriendsContainer>
    </>
  );
};

OurFriendsCard.propTypes = {
  address: propTypes.string,
  addressUrl: propTypes.string,
  email: propTypes.string,
  imageUrl: propTypes.string,
  phone: propTypes.string,
  title: propTypes.string.isRequired,
  url: propTypes.string,
  workDays: propTypes.array,
};

export default OurFriendsCard;
