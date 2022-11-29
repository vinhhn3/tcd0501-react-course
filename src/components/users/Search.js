import React, { useContext, useState } from "react";
import GitHubContext from "../context/github/githubContext";
const Search = (props) => {
  const githubContext = useContext(GitHubContext);
  const { searchUsers } = githubContext;
  const [text, setText] = useState("");
  const { clearUsers } = props;

  const handleChange = (event) => {
    setText(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (text === "") {
      alert("Required");
      return;
    }
    searchUsers(text);
    setText("");
  };

  const handleClear = (event) => {
    event.preventDefault();
    clearUsers();
  };

  return (
    <div>
      <form className="form">
        <input
          name="text"
          onChange={handleChange}
          type="text"
          placeholder="Enter to search"
          value={text}
        ></input>
        <input
          onClick={handleSubmit}
          type="submit"
          className="btn btn-dark btn-block"
        ></input>
        <button onClick={handleClear} className="btn btn-light btn-block">
          Clear
        </button>
      </form>
    </div>
  );
};

export default Search;
