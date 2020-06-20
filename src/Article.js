import React from "react";

function Article(props) {
  return (
    <>
      <div className="text-light text-center border">
        <h2>{props.title}</h2>
        <br />
        <p>Author: {props.author}</p>
        <p>Category: {props.category}</p>
        <button className="btn btn-light">
          <a
            href={props.url}
            target="_blank"
            rel="noopener noreferrer"
            alt="link"
          >
            Go to article
          </a>
        </button>
        <br />
        <br />
        <img
          src={props.image}
          className="w-30"
          style={{ display: "block", marginLeft: "auto", marginRight: "auto" }}
          alt=""
        />
        <p>Published: {props.published}</p>
      </div>
    </>
  );
}

export default Article;
