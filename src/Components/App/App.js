import React, { useState, useEffect } from "react";
import { getArticles } from "../../Utilities/apiCalls";
import Article from "../Article";

const App = () => {

  const [articles, setArticles] = useState([])

  useEffect(() => {
    getArticles("politics")
    .then(data => {
      const manipulatedData = data.results.map(obj => {
        const searchData = [obj.des_facet, obj.org_facet, obj.per_facet, obj.geo_facet]
        return {...obj, ['search_data']: searchData.flat()}
      })
      setArticles(manipulatedData)
    })
  })

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
    <div className="">
      <header className=""></header>
      <h1>Test</h1>
      <div className="bg-gray-700 text-gray-200 p-5 place-items-center gap-4 select-none grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {articleDisplay}
      </div>
    </div>
  );
}

export default App;