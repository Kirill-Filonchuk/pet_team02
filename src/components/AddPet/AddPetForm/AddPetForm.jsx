import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
// import styled from 'styled-components';
import * as yup from 'yup';

const stepOneValidationSchema = yup.object().shape({
  titleAd: yup.string().required().label('Type your name'),
  namePet: yup.string().required(),
  dateBirth: yup.string().required(),
  breedPet: yup.string(),
});

const stepTwoValidationSchema = yup.object().shape({
  gender: yup.string().required(),
  location: yup.string().required(),
  price: yup.string().required(),
  // image: yup.mixed(),
  message: yup.string().required(),
});

// const initialValues = {
//   titleAd: '',
//   namePet: '',
//   dateBirth: '',
//   breedPet: '',
//   gender: '',
//   location: '',
//   price: '',
//   // image: null,
//   message: '',
// };
// firstName: yup.string().min(1).max(50).required('Field is required'),
// lastName: yup.string().min(1).max(50).required('Field is required'),
// dateOfBirth: yup.date().required('Invalid input'),});
// const Input = styled(Field)`
//   color: #2a2a2a;
// `;

export default function AddPetForm() {
  const [data, setData] = useState({
    titleAd: '',
    namePet: '',
    dateBirth: '',
    breedPet: '',
    gender: '',
    location: '',
    price: '',
    // image: null,
    message: '',
  });

  const [currentStep, setCurrentStep] = useState(0);

  const makeRequest = formData => {
    console.log('Form Submitted', formData);
  };

  const handleNextStep = (newData, final = false) => {
    setData(prev => ({ ...prev, ...newData }));

    if (final) {
      makeRequest(newData);
      return;
    }

    setCurrentStep(prev => prev + 1);
  };

  const handlePrevStep = newData => {
    setData(prev => ({ ...prev, ...newData }));
    setCurrentStep(prev => prev - 1);
    console.log(currentStep);
  };

  const steps = [
    <StepOne next={handleNextStep} data={data} />,
    <StepTwo next={handleNextStep} prev={handlePrevStep} data={data} />,
  ];

  console.log('data', data);

  return <div style={{ color: 'blueviolet' }}>{steps[currentStep]}</div>;
}

const StepOne = props => {
  const handleSubmit = values => {
    props.next(values);
    console.log('values', values);
  };

  return (
    <>
      <Formik
        initialValues={props.data}
        onSubmit={handleSubmit}
        validationSchema={stepOneValidationSchema}
      >
        {() => (
          <Form id="step-one">
            <p>Tittle of ad</p>
            <Field type="text" name="titleAd" placeholder="Type name" />
            <ErrorMessage name="titleAd" component="div" />
            <p>Name pet</p>
            <Field type="text" name="namePet" paleceholder="Type name pet" />
            <ErrorMessage name="namePet" component="div" />
            <p>Date of birth</p>
            <Field
              type="text"
              name="dateBirth"
              placeholder="Type date of birth"
            />
            <ErrorMessage name="dateBirth" component="div" />
            <p>Breed</p>
            <Field type="text" name="breedPet" placeholder="Type breed" />
            <ErrorMessage name="breedPet" component="div" />
            {/* <button type="button" onClick={() => handleReset()}>
            Cancel
          </button> */}
          </Form>
        )}
      </Formik>
      <button type="submit" form="step-one">
        Next
      </button>
    </>
  );
};

const StepTwo = props => {
  const handleSubmit = values => {
    props.next(values, true);
    console.log('values', values);
  };
  return (
    <Formik
      validationSchema={stepTwoValidationSchema}
      initialValues={props.data}
      onSubmit={handleSubmit}
    >
      {formProps => (
        <Form id="step-two">
          <label htmlFor="gender">
            <hr />
            <p>The sex</p>
            <label htmlFor="male">
              <p>Male</p>
              <Field type="radio" name="gender" value="male" />
            </label>
            <label htmlFor="female">
              <p>Female</p>
              <Field type="radio" name="gender" value="female" />
            </label>
            <ErrorMessage name="gender" component="div" />
          </label>
          <p>Location</p>
          <Field type="text" name="location" placeholder="Type location" />
          <ErrorMessage name="location" component="div" />
          <p>Price</p>
          <Field type="text" name="price" placeholder="Type price" />
          <ErrorMessage name="price" component="div" />
          <p>Date of birth</p>
          <Field
            type="text"
            name="dateBirth"
            placeholder="Type date of birth"
          />
          <ErrorMessage name="dateBirth" component="div" />
          <p>Load the pet`s image:</p>
          <Field type="file" accept="image/*" name="image" />
          <ErrorMessage name="image" component="div" />
          <p>Comments</p>
          <Field
            component="textarea"
            name="message"
            placeholder="Type comment"
          />
          <ErrorMessage name="message" component="div" />
          <button type="button" onClick={() => props.prev(formProps.values)}>
            Back
          </button>
          <button type="submit">Submit</button>
          {/* <button type="submit" form="step-two">
            Submit
          </button> */}
        </Form>
      )}
    </Formik>
  );
};

// *************
// const handleSubmit = (values, { resetForm }) => {
//   console.log(values);
//   resetForm();
// };

/* <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <label htmlFor="titleAd">
          <span>Tittle of ad</span>
          <Input type="text" name="titleAd" placeholder="Type name" />
          <ErrorMessage name="titleAd" component="div" />
        </label>
        <br />
        <label htmlFor="namePet">
          <span>Name pet</span>
          <Input type="text" name="namePet" paleceholder="Type name pet" />
          <ErrorMessage name="namePet" component="div" />
        </label>
        <br />
        <label htmlFor="dateBirth">
          <span>Date of birth</span>
          <Input
            type="text"
            name="dateBirth"
            placeholder="Type date of birth"
          />
          <ErrorMessage name="dateBirth" component="div" />
        </label>
        <br />
        <label htmlFor="breedPet">
          <span>Breed</span>
          <Input type="text" name="breedPet" placeholder="Type breed" />
          <ErrorMessage name="breedPet" component="div" />
        </label>
        <br />
        <label htmlFor="gender">
          <hr />
          <span>The sex</span>
          <br />
          <label htmlFor="male">
            <span>Male</span>
            <Field type="radio" name="gender" value="male" />
          </label>
          <br />
          <label htmlFor="female">
            <span>Female</span>
            <Field type="radio" name="gender" value="female" />
          </label>
          <ErrorMessage name="gender" component="div" />
        </label>
        <br />
        <label htmlFor="location">
          <span>Location</span>
          <Input type="text" name="location" placeholder="Type location" />
          <ErrorMessage name="location" component="div" />
        </label>
        <br />
        <label htmlFor="price">
          <span>Price</span>
          <Input type="text" name="price" placeholder="Type price" />
          <ErrorMessage name="price" component="div" />
        </label>
        <br />
        <label htmlFor="image">
          <span>Load the pet’s image:</span>
          <Input type="file" accept="image/*" name="image" />
          <ErrorMessage name="image" component="div" />
        </label>
        <br />
        <label htmlFor="message">
          <span>Comments</span>
          <Field
            component="textarea"
            name="message"
            placeholder="Type comment"
          />
        </label>
        <hr />
        <button type="submit">Submit</button>
      </Form>
    </Formik> */
