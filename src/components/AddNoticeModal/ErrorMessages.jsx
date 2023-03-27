import { ErrorMessage } from 'formik';
import { ErrorWrapper } from './AddNoticeModal.styled';

const fields = [
  'category',
  'title',
  'name',
  'birthday',
  'breed',
  'sex',
  'place',
  'price',
  'comments',
];

const ErrorMessages = ({ isFileNeeded }) => {
  return (
    <ErrorWrapper>
      {fields.map(field => (
        <ErrorMessage key={field} name={field} render={msg => <li>{msg}</li>} />
      ))}
      {isFileNeeded && <li>Please, attach image file</li>}
    </ErrorWrapper>
  );
};

export default ErrorMessages;
