import React, { useState, useEffect } from "react";
import { getArticles } from "../../Utilities/apiCalls";
import Navbar from "../Navbar";
import ArticleContainer from "../ArticleContainer";

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

  return (
    <div className="">
      <Navbar />
      <ArticleContainer articles={articles} />
    </div>
  );
}

export default App;