// import { useState } from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import {
  Title,
  BackButton,
  CategoryItem,
  CategoryLabel,
  CategoryList,
  CategoryRadio,
  Description,
  Fields,
  Input,
  Label,
  NextButton,
  ToolBar,
} from './stepOne.styled';
const stepOneValidationSchema = yup.object().shape({
  // titleAd: yup..string()
  // .min(2)
  // .max(16)
  // .matches(/^[a-zA-Z, ]*$/g, 'Only alphabetic characters are allowed')
  // .required('Field is required!').label('Type your name'),
  // namePet: yup.string().required(),
  // dateBirth: yup.string().required(),
  // breedPet: yup.string(),
});

export default function StepOne(props) {
  const handleSubmit = values => {
    props.next(values);
    console.log('StepOneValues', values);
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
            <Title>Add pet</Title>
            <Description>
              Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
              amet, consectetur
            </Description>
            <CategoryList>
              <CategoryItem>
                <CategoryRadio
                  id="lost_found"
                  type="radio"
                  name="category"
                  className="visually-hidden"
                  value="lost-found"
                  onClick={e => {
                    console.log(e.target.value);
                  }}
                />
                <CategoryLabel htmlFor="lost_found">lost/found</CategoryLabel>
              </CategoryItem>

              <CategoryItem>
                <CategoryRadio
                  id="in_good_hands"
                  type="radio"
                  name="category"
                  value="in-good-hands"
                  onClick={e => {
                    console.log(e.target.value);
                  }}
                  className="visually-hidden"
                />
                <CategoryLabel htmlFor="in_good_hands">
                  in good hands
                </CategoryLabel>
              </CategoryItem>

              <CategoryItem>
                <CategoryRadio
                  id="sell_"
                  type="radio"
                  name="category"
                  value="sell"
                  onClick={e => {
                    console.log(e.target.value);
                  }}
                  className="visually-hidden"
                />
                <CategoryLabel htmlFor="sell_">sell</CategoryLabel>
              </CategoryItem>
            </CategoryList>
            <Fields>
              <Label>
                Tittle of ad
                <Input type="text" name="titleAd" placeholder="Type name" />
              </Label>

              <Label>
                Name pet
                <Input type="text" name="namePet" placeholder="Type name pet" />
              </Label>

              <Label>
                Date of birth
                <Input
                  type="text"
                  name="dateBirth"
                  placeholder="Type date of birth"
                />
              </Label>

              <Label>
                Breed
                <Input type="text" name="breedPet" placeholder="Type breed" />
              </Label>
            </Fields>
            <ToolBar>
              <NextButton
                type="submit"
                form="step-one"
                // onClick={() => {
                //   handleSubmit();
                // }}
              >
                Next
              </NextButton>
              <BackButton
                type="button"
                onClick={() => {
                  props.onClose();
                }}
              >
                Cancel
              </BackButton>
            </ToolBar>
          </Form>
        )}
      </Formik>
      {/* <button type="submit" form="step-one">
        MyNext
      </button> */}
    </>
  );
}
