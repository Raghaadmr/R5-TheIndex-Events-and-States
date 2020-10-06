import React from "react";

// Components
import AuthorCard from "./AuthorCard";
import SearchBar from "./SearchBar";

const AuthorList = (props) => {
  const cards = props.searchResults.map((author) => (
    <AuthorCard
      key={author.first_name + author.last_name}
      author={author}
      selectAuthor={props.selectAuthor}
    />
  ));

  return (
    <div className="authors">
      <SearchBar filterAuthors={props.filterAuthors} />
      <h3>Authors</h3>
      <div className="row">{cards}</div>
    </div>
  );
};

export default AuthorList;