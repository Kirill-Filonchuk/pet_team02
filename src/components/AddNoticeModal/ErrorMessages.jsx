import { ErrorItem, ErrorWrapper } from './AddNoticeModal.styled';

const firstPageFields = ['category', 'title', 'name', 'birthday', 'breed'];

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
    </ErrorWrapper>
  );
};

export default ErrorMessages;
