import { useState } from 'react';
import {
  ClearIcon,
  ClearIconWrapper,
  IconButton,
  SearchField,
  SearchForm,
  SearchIcon,
} from './NoticesSearch.styled';

const NoticesSearch = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [clear, setClear] = useState(false);

  const onQueryChangeHandler = e => {
    setQuery(e.target.value);
  };

  const onClearHandler = () => {
    setClear(false);
    setQuery('');
    onSearch('');
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    const searchQuery = e.target.elements.search.value.trim();

    if (!searchQuery) {
      return;
    }

    onSearch(searchQuery.toLowerCase());
    setTimeout(() => {
      setClear(true);
    }, 1000);
  };

  return (
    <SearchForm onSubmit={onSubmitHandler}>
      <SearchField
        type="text"
        name="search"
        placeholder="Search"
        onChange={onQueryChangeHandler}
        value={query}
      />

      {!clear ? (
        <IconButton type="submit">
          <SearchIcon />
        </IconButton>
      ) : (
        <ClearIconWrapper>
          <ClearIcon
            onClick={onClearHandler}
            tabIndex={0}
            onKeyDownCapture={onClearHandler}
          />
        </ClearIconWrapper>
      )}

      {/* <IconButton
        type={!clear ? 'submit' : 'button'}
        onClick={clear ? onClearHandler : null}
      >
        {!clear ? <SearchIcon /> : <ClearIcon />}
      </IconButton> */}
    </SearchForm>
  );
};

export default NoticesSearch;
