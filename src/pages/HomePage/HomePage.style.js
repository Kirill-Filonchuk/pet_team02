import styled from 'styled-components';
import DogDx1 from '../../images/home/DogDx1.png'
import DogDx2 from '../../images/home/DogDx2.png'
import { theme } from 'theme'
import Wave from '../../images/home/svg/Wave.svg'
import WaveD from '../../images/home/svg/WavesD.svg'
import Dogx1 from '../../images/home/Dogx1.png'
import Dogx2 from '../../images/home/Dogx2.png'



export const HeroTitle = styled.h1`
  font-size: 32px;
  font-style: normal;
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
    margin-left: 32px;

    }
    
    ${theme.mq.desktop} {
   font-family: 'Manrope';
   font-style: normal;
   font-weight: 700;
   font-size: 68px;
   line-height: 100px;
   margin-left: 16px;

     }
`;

export const Contain = styled.div`
    margin-left: auto;
    margin-right: auto;
    height: 88px;

   ${theme.mq.tablet} {
   width: 768px;
   }

   ${theme.mq.desktop} {
   width: 1280px;
   }
`

export const Hero = styled.div`
display: flex;
justify-content: center;
padding-top: 60px;
overflow: hidden;
max-width: 767px;
height: 650px;
background-image: url('${Dogx1}'), url(${Wave});
background-repeat: no-repeat;
background-position: center 174px, center top;
background-size: 280px 480px, 1000px 650px;

@media (min-device-pixel-ratio: 2),
  (min-resolution: 192dpi),
  (min-resolution: 2dppx) {
      background-image: url(${Dogx2}), url(${Wave});
 
}

 ${theme.mq.tablet} {
  padding-top: 88px;
  background-image: url('${Dogx1}') , url(${Wave});
  max-width: 1279px;
  height: 1350px;
  background-position: center top 360px, center 30px;
  background-size: 540px 1000px, 1449px 1190px;

  @media (min-device-pixel-ratio: 2),
  (min-resolution: 192dpi),
  (min-resolution: 2dppx) {
      background-image: url(${Dogx2}), url(${Wave});
}
 }

 ${theme.mq.desktop} {
  padding-top: 92px;
  margin-left: auto;
  margin-right: auto;
    width: 1280px; 
  height: 1100px;
  background-image: url('${DogDx1}') , url(${WaveD});
  background-position: right 18px top 92px, top;
  background-size: 524px, contain;
    
  @media (min-device-pixel-ratio: 2),
  (min-resolution: 192dpi),
  (min-resolution: 2dppx) {
      background-image: url(${DogDx2}), url(${WaveD});
 }
}
`



