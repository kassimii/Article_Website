import React from "react";
import Article from "./Article";

function SearchedArticles({ props }) {
  if (props.length === 0) {
    return <div className="text-light">No articles available.</div>;
  } else {
    return (
      <div>
        {props.map((article) => {
          return (
            <Article
              title={article.title}
              author={article.author}
              category={article.category}
              description={article.description}
              language={article.language}
              published={article.published}
              url={article.url}
              image={article.image}
            />
          );
        })}
      </div>
    );
  }
}

export default SearchedArticles;
