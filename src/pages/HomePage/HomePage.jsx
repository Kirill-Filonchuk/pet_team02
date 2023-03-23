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

// const Image = styled.section`
//   position: absolute;
//   z-index: -1;
//   display: flex;
//   align-items: center;
//   left: 0;
//   right: 0;
//   top: 0;
//   height: 100%;

//   ${p => p.theme.mq.mob} {
//     background: url(${DogMob}), url(${VolnaMob2}), url(${VolnaMob1});
//     background-repeat: no-repeat;
//     object-fit: contain;
//     overflow-y: hidden, hidden, hidden;
//     background-position: bottom;
//     background-position-y: 170%, 120%, 120%;

//   }
//   ${p => p.theme.mq.mob} {
//   }
// `;

export default Home;
