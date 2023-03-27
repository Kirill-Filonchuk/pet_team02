import { ErrorMessage, Form, useFormikContext } from 'formik';
import { useEffect, useRef, useState } from 'react';
import { ADD_NOTICE_CATEGORIES, ADD_NOTICE_GENDER } from './AddNoticeModal';
import {
  BackButton,
  CategoryItem,
  CategoryLabel,
  CategoryList,
  CategoryRadio,
  CommentDecription,
  CommentsField,
  CommentsFieldContainer,
  CommentWrapper,
  Description,
  ErrorWrapper,
  FieldsFirstStep,
  FieldsSecondStep,
  Input,
  Label,
  NextButton,
  SexItem,
  SexLabel,
  SexList,
  SexRadio,
  SexTitle,
  SexWrapper,
  Title,
  ToolBar,
  UploadDescription,
  UploadIcon,
  UploadIconWrapper,
  UploadInput,
  UploadLabel,
  UploadWrapper,
} from './AddNoticeModal.styled';

// const useAutosizeTextArea = (textAreaRef, value) => {
//   useEffect(() => {
//     if (textAreaRef) {
//       // We need to reset the height momentarily to get the correct scrollHeight for the textarea
//       textAreaRef.style.height = '0px';
//       const scrollHeight = textAreaRef.scrollHeight;
//       console.log(scrollHeight);

//       // We then set the height directly, outside of the render loop
//       // Trying to set this with state or a ref will product an incorrect value.
//       textAreaRef.style.height = scrollHeight + 'px';
//     }
//   }, [textAreaRef, value]);
// };

// export default useAutosizeTextArea;

const AddNoticeForm = ({ onClose, onAvatarChange, storage, isFileNeeded }) => {
  const { updateStorage } = storage;
  const [step, setStep] = useState(1);

  //   const [textAreaHeight, setTextAreaHeight] = useState();
  const [comments, setComments] = useState('');

  const { values } = useFormikContext();
  const updatedValues = { ...values };
  delete updatedValues.price;
  updateStorage(updatedValues);

  //   const commentsRef = useRef(null);
  //   console.log(textAreaHeight);
  //   useEffect(() => {
  //     if (!commentsRef) {
  //       return;
  //     }

  //     const scrollHeight = commentsRef.current.scrollHeight;
  //     setTextAreaHeight(scrollHeight);
  //   }, []);
  //   const textAreaRef = useRef(null);
  //   useAutosizeTextArea(textAreaRef.current, values.comments);

  const onNextClickHandler = () => {
    setStep(2);
  };

  return (
    <Form>
      {/*STEP - 1 */}
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

        <FieldsFirstStep>
          <Label>
            Tittle of ad
            <Input type="text" placeholder="Type name" name="title" />
          </Label>

          <Label>
            Name pet
            <Input type="text" placeholder="Type name pet" name="name" />
          </Label>

          <Label>
            Date of birth
            <Input
              type="text"
              placeholder="Type date of birth"
              name="birthday"
            />
          </Label>

          <Label>
            Breed
            <Input type="text" placeholder="Type breed" name="breed" />
          </Label>
        </FieldsFirstStep>
        <ToolBar>
          <NextButton type="button" onClick={onNextClickHandler}>
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

      {/*STEP - 2 */}

      <div className={step !== 2 ? 'visually-hidden' : ''}>
        <Title>Add pet</Title>
        <SexWrapper>
          <SexTitle>The sex:</SexTitle>
          <SexList>
            <SexItem>
              <SexRadio
                id="sex_male"
                type="radio"
                name="sex"
                value={ADD_NOTICE_GENDER.MALE}
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
                name="sex"
                value={ADD_NOTICE_GENDER.FEMALE}
                className="visually-hidden"
              />
              <SexLabel htmlFor="sex_female">Female</SexLabel>
            </SexItem>
          </SexList>
        </SexWrapper>
        <FieldsSecondStep>
          <Label>
            Location:
            <Input type="text" placeholder="Type location" name="place" />
          </Label>

          {values.category === ADD_NOTICE_CATEGORIES.SELL && (
            <Label>
              Price:
              <Input type="text" placeholder="Type price" name="price" />
            </Label>
          )}
        </FieldsSecondStep>
        <UploadWrapper>
          <UploadDescription>Load the pet’s image:</UploadDescription>
          <UploadLabel>
            <UploadIconWrapper>
              <UploadIcon />
            </UploadIconWrapper>
            <UploadInput
              type="file"
              name="avatar"
              className="visually-hidden"
              onChange={onAvatarChange}
            />
          </UploadLabel>
          {/* <div style={{ width: '100px', height: '100px' }}>
            {' '}
            <img src={URL.srcObject(petAvatarURL)} alt="avatar" />
          </div> */}
        </UploadWrapper>
        <CommentWrapper>
          <CommentDecription>Comments</CommentDecription>

          {/* <CommentsFieldContainer> */}
          <CommentsField
            textLength={values.comments.length}
            // ref={commentsRef}
            as="textarea"
            placeholder="Type comment"
            name="comments"
            value={comments}
            onChange={e => {
              setComments(e.target.value);
            }}
          ></CommentsField>
          {/* </CommentsFieldContainer> */}
        </CommentWrapper>
        <ToolBar>
          <NextButton type="submit">Done</NextButton>
          <BackButton
            type="button"
            onClick={() => {
              setStep(1);
            }}
          >
            Back
          </BackButton>
        </ToolBar>
      </div>

      <ErrorWrapper>
        <ErrorMessage name="category" render={msg => <li>{msg}</li>} />
        <ErrorMessage name="title" render={msg => <li>{msg}</li>} />
        <ErrorMessage name="name" render={msg => <li>{msg}</li>} />
        <ErrorMessage name="birthday" render={msg => <li>{msg}</li>} />
        <ErrorMessage name="breed" render={msg => <li>{msg}</li>} />
        <ErrorMessage name="sex" render={msg => <li>{msg}</li>} />
        <ErrorMessage name="place" render={msg => <li>{msg}</li>} />
        <ErrorMessage name="price" render={msg => <li>{msg}</li>} />
        <ErrorMessage name="comments" render={msg => <li>{msg}</li>} />
        {/* <ErrorMessage name="avatar" render={msg => <div>{msg}</div>} /> */}
        {isFileNeeded && <li>Please, attach image file</li>}
      </ErrorWrapper>
    </Form>
  );
};

export default AddNoticeForm;
