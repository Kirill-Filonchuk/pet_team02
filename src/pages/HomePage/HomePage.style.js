import styled from 'styled-components';
import DogMobx1 from '../../images/home/DogMobx1.png'
import DogMobx2 from '../../images/home/DogMobx2.png'
import DogDx1 from '../../images/home/DogDx1.png'
import DogDx2 from '../../images/home/DogDx2.png'
import DogTx1 from '../../images/home/DogTx1.png'
import DogTx2 from '../../images/home/DogTx2.png'
import { theme } from 'theme'
import Wave from '../../images/home/svg/Wave.svg'
import WaveD from '../../images/home/svg/WaveD.svg'


export const HeroTitle = styled.h1`
   font-size: 32px;
   font-weight: 700;
   line-height: 3, 14;
   margin-left: auto;
   margin-right: auto;
   width: 280px;

   ${theme.mq.tablet} {
    font-style: normal;
    font-size: 68px;
    line-height: 100px;
    width: 588px;
    height: 200px;
    margin-left: 33px;

    }
    
    ${theme.mq.desktop} {
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 700;
    font-size: 68px;
    line-height: 100px;
    argin-left: 16px;

     }
`;


export const Hero = styled.div`
    overflow: hidden;
    max-width: 767px;
    height: 490px;
    background-image: url('${DogMobx1}'), url(${Wave});
    background-repeat: no-repeat;
    background-position: 20% 90px, 30% 40px;
    background-size: 280px 524px, 620px 470px;
    margin-top: 60px;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${DogMobx2}), url(${Wave});
 
}
 ${theme.mq.tablet} {
  background-image: url('${DogTx1}') , url(${Wave});
  max-width: 1279px;
  height: 1100px;
  background-position: 50% 320px, 20% 0;
  background-size: contain, 1449px 1190px;
  margin-top: 88px;


  @media (min-device-pixel-ratio: 2),
  (min-resolution: 192dpi),
  (min-resolution: 2dppx) {
      background-image: url(${DogTx2}), url(${Wave});
}
 }

 ${theme.mq.desktop} {
  max-width: 1600px;
  height: 630px;
  background-image: url('${DogDx1}') , url(${WaveD});
  background-position: right top;
  background-size: 524px 918px, 1398px 770px;
  margin-top: 92px;
    
  @media (min-device-pixel-ratio: 2),
  (min-resolution: 192dpi),
  (min-resolution: 2dppx) {
      background-image: url(${DogDx2}), url(${WaveD});
}

`
