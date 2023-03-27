import { ADD_NOTICE_CATEGORIES, ADD_NOTICE_GENDER } from './AddNoticeModal';
import {
  BackButton,
  CommentDecription,
  CommentsField,
  CommentWrapper,
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

const SecondStepForm = ({ step, values, onAvatarChange, onClickBack }) => {
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
          as="textarea"
          placeholder="Type comment"
          name="comments"
        ></CommentsField>
        {/* </CommentsFieldContainer> */}
      </CommentWrapper>
      <ToolBar>
        <NextButton type="submit">Done</NextButton>
        <BackButton type="button" onClick={onClickBack}>
          Back
        </BackButton>
      </ToolBar>
    </div>
  );
};

export default SecondStepForm;
