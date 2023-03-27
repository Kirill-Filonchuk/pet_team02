import { useState } from 'react';
import {
  ClearIcon,
  IconButton,
  SearchField,
  SearchForm,
  SearchIcon,
} from './NoticesSearch.styled';

const NoticesSearch = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [clear, setClear] = useState(false);
  console.log(clear);

  const onQueryChangeHandler = e => {
    setQuery(e.target.value);
  };

  const onClearHandler = () => {
    setClear(false);
    setQuery('');
  };

  const onSubmitHandler = e => {
    console.log('submit', e.target);
    e.preventDefault();
    const searchQuery = e.target.elements.search.value.trim();

    if (searchQuery === query) {
      return;
    }

    onSearch(query);
    setClear(true);
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
        <IconButton type="button">
          <ClearIcon onClick={onClearHandler} />
        </IconButton>
      )}
    </SearchForm>
  );
};

export default NoticesSearch;
