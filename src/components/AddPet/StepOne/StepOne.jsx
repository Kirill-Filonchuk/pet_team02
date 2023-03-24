// import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
// import styled from 'styled-components';
import * as yup from 'yup';

const stepOneValidationSchema = yup.object().shape({
  titleAd: yup.string().required().label('Type your name'),
  namePet: yup.string().required(),
  dateBirth: yup.string().required(),
  breedPet: yup.string(),
});

export default function StepOne(props) {
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
}
