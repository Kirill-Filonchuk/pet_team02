import { Formik, Form } from 'formik';
// import styled from 'styled-components';
import * as yup from 'yup';
import {
  BackButton,
  Fields,
  Input,
  TextArea,
  InputPetsFoto,
  PetsFotoLabel,
  Label,
  InputWrapper,
  NextButton,
  SexItem,
  SexLabel,
  SexList,
  SexRadio,
  SexTitle,
  SexWrapper,
  Title,
  ToolBar,
} from '../ModalAddPet.styled';

const stepTwoValidationSchema = yup.object().shape({
  // gender: yup.string().required(),
  // location: yup.string().required(),
  // price: yup.string().required(),
  // // image: yup.mixed(),
  // message: yup.string().required(),
});

export default function StepTwo(props) {
  const handleSubmit = values => {
    props.next(values, true);
    console.log('StepTwoValues', values);
  };
  return (
    <Formik
      validationSchema={stepTwoValidationSchema}
      initialValues={props.data}
      onSubmit={handleSubmit}
    >
      {formProps => (
        <Form id="step-two">
          <Title>Add pet</Title>

          <SexWrapper>
            <SexTitle>The sex:</SexTitle>
            <SexList>
              <SexItem>
                <SexRadio
                  id="sex_male"
                  type="radio"
                  name="gender"
                  value="male"
                  className="visually-hidden"
                />
                <SexLabel htmlFor="sex_male" isMale>
                  Male
                </SexLabel>
              </SexItem>
              <SexItem>
                <SexRadio
                  id="sex_female"
                  type="radio"
                  name="gender"
                  value="female"
                  className="visually-hidden"
                />
                <SexLabel htmlFor="sex_female">Female</SexLabel>
              </SexItem>
            </SexList>
          </SexWrapper>
          <Fields>
            <Label>
              Location
              <Input type="text" name="location" placeholder="Type location" />
            </Label>

            <Label>
              Price
              <Input type="text" name="price" placeholder="Type price" />
            </Label>

            <Label>
              Comments
              <TextArea
                component="textarea"
                name="message"
                placeholder="Type comment"
              />
            </Label>
            <InputWrapper>
              <PetsFotoLabel>
                Load the pet`s image:
                <InputPetsFoto type="file" name="image" />
              </PetsFotoLabel>
            </InputWrapper>
          </Fields>
          <ToolBar>
            <NextButton
              type="submit"
              form="step-two"
              // onClick={() => {
              //   onClose();
              // }}
            >
              Done
            </NextButton>
            <BackButton
              type="button"
              onClick={() => props.prev(formProps.values)}
            >
              Back
            </BackButton>
          </ToolBar>
        </Form>
      )}
    </Formik>
  );
}
