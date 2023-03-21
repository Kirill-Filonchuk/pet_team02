import styled from 'styled-components';
// import mobile_dog from '../../images/mobile_dog.png';
// import volna from '../../images/volna.png';

const Home = () => {
  return (
    <div>
      <HeroTitle>Take good care of your small pets</HeroTitle>
      {/* <Image></Image> */}
    </div>
  );
};

const HeroTitle = styled.h1`
  width: 280px;
  height: 88px;
  font-size: 32px;
  font-weight: 700;
  line-height: 3, 14;
  margin-bottom: 29px;
`;
// const Image = styled.div`
//   ${p => p.theme.mq.mob} {
//     height: 65vh;
//     background-image: url(${mobile_dog}), url(${volna});
//     /* min-height: 65vh; */
//     background-repeat: no-repeat;
//     background-size: 100%, 100%, cover;
//     /* background-position: top 120px right 130px, top 270px left 130px; */
//     background-position-x: 55%;
//     background-position-y: 100%;
//     z-index: 1;
//   }
// `;

export default Home;
