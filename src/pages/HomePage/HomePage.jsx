import styled from 'styled-components';
import VolnaMob1 from '../../images/home/VolnaMob1.png';
import Pes from '../../images/home/Pes.png'

const Home = () => {
  return (
    <Hero>
      <HeroTitle>Take good care of your small pets</HeroTitle>
    </Hero>
  );
};

const HeroTitle = styled.h1`
  width: 280px;
  height: 88px;
  font-size: 32px;
  font-weight: 700;
  line-height: 3, 14;
  margin: 60px 20px 29px 20px;

`;

const Hero = styled.div`
width: 100%;
   height: 480px;
background-image: url('${Pes}'), url(${VolnaMob1});
background-repeat: no-repeat;
background-position: 20px bottom, -86px 51px;
`

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
