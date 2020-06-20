import React from "react";
import { useState } from "react";

import SearchedArticles from "./SearchedArticles";

function SearchPage() {
  const [articles, setArticles] = useState([]);

  const [searchWord, setSearchWord] = useState("");

  function handleChange({ target }) {
    setSearchWord(target.value);
  }

  function handleSearch(event) {
    event.preventDefault();
    var url =
      "https://api.currentsapi.services/v1/search?keywords=" +
      searchWord +
      "&language=en&" +
      "apiKey=qddb6ac3iV1hH0fc4mQwT7cTezJ-MkmsvY-122G24jzmTVHo";
    var req = new Request(url);
    fetch(req)
      .then(function (response) {
        return response.json();
      })
      .then((json) => {
        setArticles(json.news);
        console.log(json.news);
      });
  }

  return (
    <div style={{ backgroundColor: "#561f55   " }}>
      <br />

      <nav className="navbar navbar-light bg-light">
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            id="searchWord"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={handleChange}
            value={searchWord}
          />
          <button
            className="btn btn-success my-2 my-sm-0"
            type="submit"
            onClick={handleSearch}
          >
            Search
          </button>
        </form>
      </nav>

      <SearchedArticles props={articles} />
    </div>
  );
}

export default SearchPage;
