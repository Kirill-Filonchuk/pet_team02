import { ErrorMessage } from 'formik';
import { useEffect } from 'react';
import {
  BackButton,
  CategoryItem,
  CategoryLabel,
  CategoryList,
  CategoryRadio,
  Description,
  ErrorItem,
  FieldsFirstStep,
  Input,
  Label,
  NextButton,
  Title,
  ToolBar,
} from './AddNoticeModal.styled';
import { ADD_NOTICE_CATEGORIES } from './utils/constants';

const FirstStepForm = ({
  step,
  onClickNext,
  onClose,
  formik,
  handleSwitchSchema,
}) => {
  const firstStepValidateFields = {
    category: true,
    title: true,
    name: true,
    birthday: true,
    breed: true,
  };

  const checkValidationErrors = (
    firstStepValidateFields,
    formikErrors,
    formikValues
  ) => {
    let hasError = false;
    for (let field in firstStepValidateFields) {
      if (formikErrors[field] || formikValues[field] === '') return true;
    }

    return hasError;
  };

  const { errors, touched, validateForm, setTouched, values, setFieldValue } =
    formik;

  useEffect(() => {
    if (values.category === ADD_NOTICE_CATEGORIES.SELL) {
      // setFieldValue('showPrice', true);
      handleSwitchSchema(true);
    } else {
      // setFieldValue('showPrice', false);
      handleSwitchSchema(false);
    }
  }, [handleSwitchSchema, values.category]);

  return (
    <div className={step !== 1 ? 'visually-hidden' : ''}>
      <Title>Add pet</Title>
      <Description>
        Please complete the two-step form for creating a new pet card
      </Description>

      <CategoryList>
        <CategoryItem>
          <CategoryRadio
            id="lost_found"
            type="radio"
            name="category"
            className="visually-hidden"
            value={ADD_NOTICE_CATEGORIES.LOST_FOUND}
          />
          <CategoryLabel htmlFor="lost_found">lost/found</CategoryLabel>
        </CategoryItem>

        <CategoryItem>
          <CategoryRadio
            id="in_good_hands"
            type="radio"
            name="category"
            value={ADD_NOTICE_CATEGORIES.IN_GOOD_HANDS}
            className="visually-hidden"
          />
          <CategoryLabel htmlFor="in_good_hands">in good hands</CategoryLabel>
        </CategoryItem>

        <CategoryItem>
          <CategoryRadio
            id="sell_"
            type="radio"
            name="category"
            value={ADD_NOTICE_CATEGORIES.SELL}
            className="visually-hidden"
          />
          <CategoryLabel htmlFor="sell_">sell</CategoryLabel>
        </CategoryItem>
      </CategoryList>
      {errors.category && touched.category && (
        <ErrorItem>{errors.category}</ErrorItem>
      )}

      <FieldsFirstStep>
        <Label>
          Tittle of ad
          <Input type="text" placeholder="Type name" name="title" />
          <ErrorMessage
            name="title"
            render={msg => <ErrorItem>{msg}</ErrorItem>}
          />
        </Label>

        <Label>
          Name pet
          <Input type="text" placeholder="Type name pet" name="name" />
          <ErrorMessage
            name="name"
            render={msg => <ErrorItem>{msg}</ErrorItem>}
          />
        </Label>

        <Label>
          Date of birth
          <Input type="text" placeholder="Type date of birth" name="birthday" />
          <ErrorMessage
            name="birthday"
            render={msg => <ErrorItem>{msg}</ErrorItem>}
          />
        </Label>

        <Label>
          Breed
          <Input type="text" placeholder="Type breed" name="breed" />
          <ErrorMessage
            name="breed"
            render={msg => <ErrorItem>{msg}</ErrorItem>}
          />
        </Label>
      </FieldsFirstStep>
      <ToolBar>
        <NextButton
          type="button"
          onClick={() => {
            setTouched(firstStepValidateFields);
            validateForm();
            if (
              !checkValidationErrors(firstStepValidateFields, errors, values)
            ) {
              onClickNext();
            }
          }}
        >
          {/* <NextButton type="button" onClick={onClickNext}> */}
          Next
        </NextButton>
        <BackButton
          type="button"
          onClick={() => {
            onClose();
          }}
        >
          Cancel
        </BackButton>
      </ToolBar>
    </div>
  );
};

export default FirstStepForm;
