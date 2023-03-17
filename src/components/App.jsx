// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };

import LoginForm from "components/LoginForm";
import RegisterForm from "components/RegisterForm";

export const App = () => {
  return (
    // <LoginForm/>
    <RegisterForm/>
  );
};