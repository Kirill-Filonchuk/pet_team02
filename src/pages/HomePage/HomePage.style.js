import styled from 'styled-components';
import VolnaMob1 from '../../images/home/VolnaMob1.png';
import Pes from '../../images/home/Pes.png'
import PesDesk from '../../images/home/Pes_d.png'
import PesTablet from '../../images/home/Pes_t.png'
import Wave from '../../images/home/Wave_t.png'
import WaveDesk from '../../images/home/Wave_D.png'
import {theme} from 'theme'


export const HeroTitle = styled.h1`
  width: 280px;
  height: 88px;
  font-size: 32px;
  font-weight: 700;
  line-height: 3, 14;
  margin: 60px 20px 29px 20px;
   ${theme.mq.tablet} {
    font-style: normal;
    font-size: 68px;
    line-height: 100px;
    width: 588px;
    height: 200px;
    margin-top: 88px;
    }
    
    ${theme.mq.desktop} {
        font-weight: 700;
     }
`;


export const Hero = styled.div`
width: 100wv;
   height: 480px;
background-image: url('${Pes}'), url(${VolnaMob1});
background-repeat: no-repeat;
background-position: 20px bottom, -86px 51px;
 ${theme.mq.tablet} {
  background-image: url('${PesTablet}') , url(${Wave});
  height: 700px;
  height: 1100px;
  background-position: 80px bottom, bottom left;

 }

 ${theme.mq.desktop} {
  background-image: url('${PesDesk}') , url(${WaveDesk});
  background-position: 805px bottom, bottom right;
  height: 700px;
    
}

`

// ${theme.mq.tablet} {

// }

// ${theme.mq.desktop} {
    
// }