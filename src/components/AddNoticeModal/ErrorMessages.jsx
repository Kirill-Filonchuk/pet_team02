import { ErrorItem, ErrorWrapper } from './AddNoticeModal.styled';

const firstPageFields = ['category', 'title', 'name', 'birthday', 'breed'];

// const fields = [
//   'category',
//   'title',
//   'name',
//   'birthday',
//   'breed',
//   'sex',
//   'place',
//   'price',
//   'comments',
// ];

const ErrorMessages = ({ errors }) => {
  let hasError = false;
  firstPageFields.forEach(field => {
    if (errors[field]) {
      hasError = true;
      return;
    }
  });

  return (
    <ErrorWrapper>
      {hasError && (
        <ErrorItem>Please check errors on the prevoius step</ErrorItem>
      )}
      {/* {fields.map(field => (
        
      ))} */}
      {/* {isFileNeeded && <li>Please, attach image file</li>} */}
    </ErrorWrapper>
  );
};

export default ErrorMessages;
