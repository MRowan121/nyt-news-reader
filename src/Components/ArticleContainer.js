import React from "react";
import Article from "./Article";

const ArticleContainer = ({ articles }) => {
    const articleDisplay = articles.map(obj => {
        return (
          <Article 
            image={obj.multimedia[0].url} 
            caption={obj.multimedia[0].caption} 
            title={obj.title} 
            abstract={obj.abstract} 
            key={obj.title}
            url={obj.url}
          />
        )
      })
    
    return (
        <div className="bg-gray-700 text-gray-200 p-5 place-items-center gap-4 select-none grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
            {articleDisplay}
        </div>
    )
}

export default ArticleContainer