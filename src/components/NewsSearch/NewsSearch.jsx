import { useState } from 'react';
import propTypes from 'prop-types';
import {
  ClearIcon,
  IconButton,
  SearchField,
  SearchForm,
  SearchIcon,
} from './NewsSearch.styled';

const InputNewsFindPet = ({ setSearchWord }) => {
  const [query, setQuery] = useState('');

  const onQueryChangeHandler = e => {
    setQuery(e.target.value);
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    let query = e.target.elements.search.value;
    setSearchWord(query);
  };

  const onClearHandler = () => {
    setQuery('');
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

      {!query ? (
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

InputNewsFindPet.propTypes = {
  setSearchWord: propTypes.func.isRequired,
};

export default InputNewsFindPet;
