import React from "react";

const AuthorDetail = (props) => {
  const author = `${props.currentAuthor.first_name} ${props.currentAuthor.last_name}`;
  const books = props.currentAuthor.books.map((book) => (


    <tr>
      <td>{book.title}</td>
      <td>
        {props.currentAuthor.first_name} {props.currentAuthor.last_name}
      </td>
      <td>
        <button className="btn" style={{ backgroundColor: `${book.color}` }} />
      </td>
    </tr>
  ));

  
  return (
    <div className="author col-xs-10">
      <div>
        <h3>{author}</h3>
        <img
          src="http://catchingfire.ca/wp-content/uploads/2016/09/question-mark-square-01.png"
          className="img-thumbnail"
          alt=""
        />
      </div>
      <table className="mt-3 table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Authors</th>
            <th>Color</th>
          </tr>
        </thead>
        <tbody>{books}</tbody>
      </table>
    </div>
  );
};

export default AuthorDetail;