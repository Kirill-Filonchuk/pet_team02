import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
import * as yup from 'yup';

const stepTwoValidationSchema = yup.object().shape({
  gender: yup.string().required(),
  location: yup.string().required(),
  price: yup.string().required(),
  // image: yup.mixed(),
  message: yup.string().required(),
});

const RadioM = styled(Field)`
  /* opacity: 0; */
`;
const RadioF = styled(Field)`
  /* opacity: 0; */
`;

const TytleMale = styled.p`
  padding: 5px 10px;
  background: green;
  color: orange;
  cursor: pointer;
  font-size: 18px;
  &:checked {
    background: yellowgreen;
    border: 2px solid yellowgreen;
  }
`;

const TytleFemail = styled.p`
  padding: 5px 10px;
  background-color: green;
  color: orange;
  cursor: pointer;
  font-size: 18px;
  &:checked {
    background: yellowgreen;
    border: 2px solid yellowgreen;
  }
`;

export default function StepTwo(props) {
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
              <TytleMale>Male</TytleMale>
              <RadioM type="radio" id="male" name="gender" value="male" />
            </label>
            <label htmlFor="female">
              <TytleFemail>Female</TytleFemail>
              <RadioF type="radio" id="femail" name="gender" value="female" />
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
}
