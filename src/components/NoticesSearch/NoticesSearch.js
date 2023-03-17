import { useState } from "react";
import {
  ClearIcon,
  IconButton,
  SearchField,
  SearchForm,
  SearchIcon,
} from "./NoticesSearch.styled";

const NoticesSearch = () => {
  const [query, setQuery] = useState("");

  const onQueryChangeHandler = (e) => {
    setQuery(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const query = e.target.elements.search.value;
    console.log(query);
  };

  const onClearHandler = () => {
    setQuery("");
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

export default NoticesSearch;
