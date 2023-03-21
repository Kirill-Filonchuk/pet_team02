import styled from 'styled-components';
// import DogMob from '../../images/home/DogMob.png';
// import VolnaMob1 from '../../images/home/VolnaMob1.png';
// import VolnaMob2 from '../../images/home/VolnaMob1.png';

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
//     /* height: 65vh; */
//     height: 100vh;
//     background: url(${DogMob}) center bottom fixed,
//       url(${VolnaMob2}) -100px bottom fixed,
//       url(${VolnaMob1}) -100px bottom fixed;
//     min-height: 65vh;
//     background-repeat: no-repeat;
//     object-fit: cover;
//     background-size: 280px, 620px, 620px;
//     background-position-y: 160%, 110%, 110%;
//     /* z-index: 1; */
//   }
//   ${p => p.theme.mq.mob} {
//   }
// `;

export default Home;
