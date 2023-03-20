import styled from "styled-components";

export const Wrap = styled('div') `
background-color: #FDF7F2;
padding: 0px 20px;
 @media screen and (min-width: 768px) {
padding-left: 0;
  
}
 @media screen and (min-width: 1280px) {
padding-left: 0;
display: flex;
} 
`
// @media screen and (min-width: 768px) {
  
// }

// @media screen and (min-width: 1280px) {

// } 

export const Title = styled('h2')`

margin-bottom: 18px;
font-family: 'Manrope';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 27px;
display: flex;
align-items: center;
letter-spacing: 0.04em;
color: #000000;
@media screen and (min-width: 768px) {
    margin-bottom: 40px;
      }
    
      @media screen and (min-width: 1280px) {
        margin-bottom: 24px;
    } 
`
export const Photo = styled('image')`
width: 233px;
height: 233px;
border-radius: 50%;
`
export const List = styled('ul')`
list-style: none;
padding: 0;
position: relative;
`
export const CardUser = styled('div')`
padding: 20px 16px;
box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
border-radius: 20px;
margin-bottom: 20px
@media screen and (min-width: 768px) {
    padding-left: 0;
    display: flex;
     
    }

@media screen and (min-width: 1280px) {
        box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
border-radius: 0px 40px 40px 0px;
width: 541px
    } 
`
export const CardPet = styled('div')`
padding: 20px 16px;
box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
border-radius: 20px;
margin-bottom: 20px
@media screen and (min-width: 768px) {
    padding-left: 0;
    display: flex;
     
    }
    @media screen and (min-width: 1280px) {
margin-left: 18px;
    } 

`
export const Input = styled('input')`
background: #FDF7F2;
border: 1px solid rgba(245, 146, 86, 0.5);
border-radius: 40px;
outline: none;
width: 117px;
`
export const Text = styled('p')`
font-family: 'Manrope';
font-style: normal;
font-weight: 500;
font-size: 12px;
line-height: 16px;
display: flex;
align-items: center;
letter-spacing: 0.04em;
color: #111111;
display: block;
width: 82px;
@media screen and (min-width: 1280px) {
    
    font-size: 18px;
line-height: 25px;
width: 100px;

} 
`

export const Item = styled('li')`
display: flex;
justify-content: space-between;
align-items: center;

`
export const EditPhoto = styled('input')`
display: none;
`
export const Label = styled('label')`
font-family: 'Manrope';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 22px;
display: flex;
align-items: center;
letter-spacing: 0.04em;
color: #111111;
margin-left: 170px;
margin-top: 12px;
margin-bottom: 36px;
`

export const Log = styled('span')`
font-family: 'Manrope';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 22px;
display: flex;
align-items: center;
letter-spacing: 0.04em;
color: rgba(17, 17, 17, 0.6);
margin-left: 179px;
margin-top: 20px;
@media screen and (min-width: 1280px) {
margin-left: 17px;
    }
`
export const FromPet = styled('div')`
display: flex;
justify-content: space-between;

`
export const AddPet = styled('span')`
display: block;
width: 40px;
height: 40px;
background-color: #F59256;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
`
export const PetInfo = styled('p')`
font-family: 'Manrope';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 22px;
display: flex;
align-items: center;
letter-spacing: 0.04em;
color: #000000;
`
export const Delete = styled('span')`
position: absolute;
top: 0;
right: 0;
`

// @media screen and (min-width: 768px) {
  
//   }

//   @media screen and (min-width: 1280px) {

//  } 