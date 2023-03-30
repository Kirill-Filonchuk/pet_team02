import OvalSpinner from 'components/UIKit/Spinners/OvalSpinner';
import { ErrorMessage, Field } from 'formik';
import {
  BackButton,
  CommentDecription,
  CommentsField,
  CommentWrapper,
  ErrorItem,
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
  UploadImage,
  UploadImageWrapper,
  UploadInput,
  UploadLabel,
  UploadWrapper,
} from './AddNoticeModal.styled';
import { ADD_NOTICE_CATEGORIES, ADD_NOTICE_GENDER } from './utils/constants';

const SecondStepForm = ({
  step,
  onAvatarChange,
  onClickBack,
  avatarURL,
  isAddingPet,
  isFileNeeded,
  formik,
}) => {
  const { errors, touched, values } = formik;

  return (
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
        {errors.sex && touched.sex && <ErrorItem>{errors.sex}</ErrorItem>}
      </SexWrapper>

      <FieldsSecondStep>
        <Label>
          Location:
          <Input type="text" placeholder="Type location" name="place" />
          <ErrorMessage
            name="place"
            render={msg => <ErrorItem>{msg}</ErrorItem>}
          />
        </Label>

        {values.category === ADD_NOTICE_CATEGORIES.SELL && (
          <Label>
            Price:
            <Input type="text" placeholder="Type price" name="price" />
            <ErrorMessage
              name="price"
              render={msg => <ErrorItem>{msg}</ErrorItem>}
            />
          </Label>
        )}
      </FieldsSecondStep>
      <UploadWrapper>
        <UploadDescription>Load the pet’s image:</UploadDescription>
        <UploadLabel>
          {avatarURL ? (
            <UploadImageWrapper>
              <UploadImage src={avatarURL} alt="pet avatar" />
            </UploadImageWrapper>
          ) : (
            <UploadIconWrapper>
              <UploadIcon />
            </UploadIconWrapper>
          )}

          <UploadInput
            type="file"
            name="avatar"
            className="visually-hidden"
            onChange={onAvatarChange}
          />
        </UploadLabel>
        {isFileNeeded && <ErrorItem>Please, attach image file</ErrorItem>}
      </UploadWrapper>

      <CommentWrapper>
        <CommentDecription>Comments</CommentDecription>

        <Field name="comments">
          {({ field, form, meta }) => {
            return (
              <CommentsField
                name="comments"
                placeholder="Type comment"
                value={field.value}
                onChange={field.onChange}
              ></CommentsField>
            );
          }}
        </Field>
        <ErrorMessage
          name="comments"
          render={msg => <ErrorItem>{msg}</ErrorItem>}
        />
      </CommentWrapper>
      <ToolBar>
        <NextButton type="submit" disabled={isAddingPet}>
          Done
          {isAddingPet && <OvalSpinner />}
        </NextButton>
        <BackButton type="button" onClick={onClickBack}>
          Back
        </BackButton>
      </ToolBar>
    </div>
  );
};

export default SecondStepForm;
