// import { toast } from 'react-toastify';
// import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';

import UserDataItem from '../UserDataItem/UserDataItem';
import noAvatar from './no-image.jpeg';
import logoutIcon from './logout-icon.png';
// import Avatar from './Ellipse 45.png';

import {
  UserTitle,
  EditImageBtn,
  EditImageIcon,
  ImageContainer,
  InputFile,
  InputWrapper,
  StyledImage,
  Wrapper,
  ImageWrapper,
  LogoutBtn,
  LogoutIcon,
  UserItemWrapper,
} from './UserData.styled.jsx';
// import { useDispatch, useSelector } from 'react-redux';
// import { logout, updateUser } from 'redux/auth/authOperations';
// import { selectAccessToken } from 'redux/auth/authSelectors';

const imageExtensions = [
  'png',
  'jpg',
  'jpeg',
  'gif',
  'jfif',
  'pjpeg',
  'pjp',
  'webp',
];

export default function UserData() {
  // export default function UserData({user}) {
  // const dispatch = useDispatch();
  const [isDisabledBtn, setIsDisabledBtn] = useState(false);
  const [avatarError, setAvatarError] = useState(null);
  const user = {
    email: 'mail.comm',
    name: 'Artur',
    birthDate: null,
    phone: '099-99-999999',
    location: 'Kharkov, Kharkovskaya',
    avatar: null,
  };
  // const token = useSelector("selectAccessToken");

  const {
    email,
    name,
    birthDate: birthday,
    phone,
    location: city,
    avatar,
  } = user;

  const handleFileChange = async e => {
    const fileExtension = e.target.value.split('.')[1];
    if (!imageExtensions.includes(fileExtension)) {
      setAvatarError('Avatar should be an image');
      return;
    }
    setAvatarError(null);
    const imgFile = e.target.files[0];

    if (imgFile) {
      // const value = { avatar: imgFile };
      // await dispatch(updateUser({ value, token }));
    }
  };

  return (
    <>
      <UserTitle>My information:</UserTitle>
      <Wrapper>
        <ImageContainer>
          <ImageWrapper>
            <StyledImage
              alt="user-photo"
              src={avatar === null ? noAvatar : avatar}
            />
          </ImageWrapper>

          {avatarError ? (
            <div
              style={{
                color: 'red',
                fontSize: '.7rem',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              {avatarError}
            </div>
          ) : null}

          <InputWrapper>
            <InputFile type="file" onChange={handleFileChange} />
            <EditImageBtn>
              <EditImageIcon />
              <span>Edit photo</span>
            </EditImageBtn>
          </InputWrapper>
        </ImageContainer>
        <UserItemWrapper>
          <UserDataItem
            setIsDisabledBtn={setIsDisabledBtn}
            isDisabledBtn={isDisabledBtn}
            field="name"
            initValue={{ name }}
            setUser={async value => {
              if (value.name === name) {
                return;
              }
              // await dispatch(updateUser({ value, token }));
            }}
          ></UserDataItem>
          <UserDataItem
            setIsDisabledBtn={setIsDisabledBtn}
            isDisabledBtn={isDisabledBtn}
            field="email"
            initValue={{ email }}
            setUser={async value => {
              if (value.email === email) {
                return;
              }
              // await dispatch(updateUser({ value, token }));
            }}
          ></UserDataItem>
          <UserDataItem
            setIsDisabledBtn={setIsDisabledBtn}
            isDisabledBtn={isDisabledBtn}
            field="birthday"
            initValue={{
              birthday:
                birthday === null ? '00.00.0000' : getBirthdayString(birthday),
            }}
            setUser={async value => {
              if (value.birthDate === birthday) {
                return;
              }
              // await dispatch(updateUser({ value, token }));
            }}
          ></UserDataItem>
          <UserDataItem
            setIsDisabledBtn={setIsDisabledBtn}
            isDisabledBtn={isDisabledBtn}
            field="phone"
            initValue={{ phone }}
            setUser={async value => {
              if (value.phone === phone) {
                return;
              }
              // await dispatch(updateUser({ value, token }));
            }}
          ></UserDataItem>
          <UserDataItem
            setIsDisabledBtn={setIsDisabledBtn}
            isDisabledBtn={isDisabledBtn}
            field="city"
            initValue={{ city }}
            setUser={async value => {
              if (value.location === city) {
                return;
              }
              // await dispatch(updateUser({ value, token }));
            }}
          ></UserDataItem>
          <LogoutBtn
          // onClick={async () => await dispatch(logout())}
          >
            <LogoutIcon alt="logout user" src={logoutIcon} /> Log Out
          </LogoutBtn>
        </UserItemWrapper>
      </Wrapper>
    </>
  );
}

function getBirthdayString(birthday) {
  const date = new Date(birthday);
  const day = date.getDate();
  const month = date.getMonth() + 1;

  return `${day < 10 ? `0${day}` : day}.${
    month < 10 ? `0${month}` : month
  }.${date.getFullYear()}`;
}
