import propTypes from 'prop-types';
import ModalHours from './ModalHours';
import {
  TitleContainer,
  TitleLink,
  FriendsContainer,
  Image,
  ContactList,
  ContactItem,
  ContactLink,
  ContactText,
  Address,
} from './OurFriendsCard.styled';
import { useState, useEffect } from 'react';

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
  // const dashDottedLine = '-----------------------------------';
  const dashDottedLine = '-----------------------------';
  const [openModal, setOpenModal] = useState(false);
  const [targetModal, setTargetModal] = useState(null);
  useEffect(() => {
    // console.log('Mount');
    window.addEventListener('click', onCloseModal);
    return () => {
      // console.log('unmount');
      window.removeEventListener('click', onCloseModal);
    };
  });
  const onOpenModal = e => {
    setTargetModal(e.currentTarget);
    setOpenModal(true);
    // console.log('openModal');
  };
  const onCloseModal = e => {
    if (e.target === targetModal) {
      return;
    }
    // console.log('closeModal');
    setOpenModal(false);
  };

  // const titleCounter = title => {
  //   const lengthTitle = 23;
  //   if (title.length > lengthTitle) {
  //     const titleSlice = title.slice(0, lengthTitle);
  //     return `${titleSlice}...`;
  //   }
  //   return title;
  // };
  // console.log('workDays===', workDays);
  const days = workDays => {
    let daysIsOpen = [];
    if (workDays && workDays.length > 0) {
      workDays.map(day => {
        if (day.isOpen === true) {
          daysIsOpen.push(day);
        }
        return workDays;
      });
      // ====formattedTime
      let timeFrom = daysIsOpen[0].from;
      let [hours, minutes] = timeFrom.split(':');
      if (hours.startsWith('0')) {
        hours = hours.substring(1);
      }
      let newTimeFrom = `${hours}:${minutes}`;
      // ====
      return `${newTimeFrom}-${daysIsOpen[0].to}`;
    }
    return null;
  };
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
            {days(workDays) && (
              <ContactLink onClick={onOpenModal}>
                Time:
                <br />
                {days(workDays)}
              </ContactLink>
            )}
            {!days(workDays) && (
              <ContactText>
                Time:
                <br />
                {dashDottedLine}
              </ContactText>
            )}
            {openModal && <ModalHours workDays={workDays} />}
          </ContactItem>
          <ContactItem>
            {address && (
              <ContactLink href={addressUrl} target="_blank">
                Address: <br />
                {address && <Address>{contactCounter(address)}</Address>}
              </ContactLink>
            )}
            {!address && (
              <ContactText>
                Address: <br />
                {dashDottedLine}
              </ContactText>
            )}
          </ContactItem>
          <ContactItem>
            {email && (
              <ContactLink href={`mailto:${email}`}>
                Email: <br />
                {contactCounter(email)}
              </ContactLink>
            )}
            {!email && (
              <ContactText>
                Email: <br />
                {dashDottedLine}
              </ContactText>
            )}
          </ContactItem>
          <ContactItem>
            {phone && (
              <ContactLink href={`tel:${phone}`}>
                Phone: <br />
                {contactCounter(phone)}
              </ContactLink>
            )}
            {!phone && (
              <ContactText>
                Phone: <br />
                {dashDottedLine}
              </ContactText>
            )}
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
