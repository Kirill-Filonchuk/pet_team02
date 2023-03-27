import { ADD_NOTICE_CATEGORIES } from './AddNoticeModal';
import {
  BackButton,
  CategoryItem,
  CategoryLabel,
  CategoryList,
  CategoryRadio,
  Description,
  FieldsFirstStep,
  Input,
  Label,
  NextButton,
  Title,
  ToolBar,
} from './AddNoticeModal.styled';

const FirstStepForm = ({ step, onClickNext, onClose }) => {
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
          <Input type="text" placeholder="Type date of birth" name="birthday" />
        </Label>

        <Label>
          Breed
          <Input type="text" placeholder="Type breed" name="breed" />
        </Label>
      </FieldsFirstStep>
      <ToolBar>
        <NextButton type="button" onClick={onClickNext}>
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
