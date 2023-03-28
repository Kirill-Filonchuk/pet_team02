// import React, { useState } from 'react';
// import { Formik } from 'formik';
// import FormNavigation from '../NavigationForm/NavigationForm';

// import { FormAuth } from 'components/LoginForm/LoginForm.styled';

// const MultiStepForm = ({ children, initialValues, onSubmit }) => {
//   const [stepNumber, setStepNumber] = useState(0);
//   const steps = React.Children.toArray(children);

//   const [snapshot, setSnapshot] = useState(initialValues);

//   const step = steps[stepNumber];
//   const totalSteps = steps.length;
//   const isLastStep = stepNumber === totalSteps - 1;

//   const next = values => {
//     setSnapshot(values);
//     setStepNumber(stepNumber + 1);
//   };

//   const previous = values => {
//     setSnapshot(values);
//     setStepNumber(stepNumber - 1);
//   };

//   const handleSubmit = async (values, actions) => {
//     if (step.props.onSubmit) {
//       await step.props.onSubmit(values);
//     }

//     if (isLastStep) {
//       return onSubmit(values, actions);
//     } else {
//       actions.setTouched({});
//       next(values);
//     }
//   };

//   return (
//     <>
//       <Formik
//         initialValues={snapshot}
//         onSubmit={handleSubmit}
//         // validationSchema={step.props.validationSchema}
//       >
//         {formik => (
//           <FormAuth onSubmit={formik.handleSubmit}>
//             {step}
//             <FormNavigation
//               isLastStep={isLastStep}
//               hasPrevious={stepNumber > 0}
//               onBackClick={() => previous(formik.values)}
//             />
//           </FormAuth>
//         )}
//       </Formik>
//     </>
//   );
// };

// const FormStep = ({ stepName = '', children }) => children;

// export { MultiStepForm, FormStep };
