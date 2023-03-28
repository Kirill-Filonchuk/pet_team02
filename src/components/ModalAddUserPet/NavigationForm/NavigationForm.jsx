// import useAuth from '../../../hooks/useAuth/useAuth';

// import { ButtonBack, BtnFormSubmit, WraperBtn } from './NavigationForm.styled';

// const FormNavigation = props => {
//   const { isRefreshing } = useAuth();
//   return (
//     <>
//       <WraperBtn>
//         <BtnFormSubmit type="submit" name="Done">
//           {props.isLastStep ? 'Done' : 'Next'}
//         </BtnFormSubmit>

//         {!props.isLastStep && (
//           <ButtonBack type="button" name="cancel">
//             Cancel
//           </ButtonBack>
//         )}

//         {props.hasPrevious && !isRefreshing ? (
//           <ButtonBack type="button" name="back" onClick={props.onBackClick}>
//             Back
//           </ButtonBack>
//         ) : null}
//       </WraperBtn>
//     </>
//   );
// };

// export default FormNavigation;
