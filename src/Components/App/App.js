import React, { useState, useEffect } from "react";
import { getArticles } from "../../Utilities/apiCalls";
import Navbar from "../Navbar";
import ArticleContainer from "../ArticleContainer";
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'

function App() {

  const [articles, setArticles] = useState([])
  const [locationPath, setPath] = useState("home")
  
  const location = useLocation()

  useEffect(() => {
      const category = location.pathname.split("/")[2]
      setPath(category)
  }, [location.pathname])
 
  useEffect(() => {
    getArticles(locationPath)
    .then(data => {
      const manipulatedData = data.results.map(obj => {
        const searchData = [obj.des_facet, obj.org_facet, obj.per_facet, obj.geo_facet]
        return {...obj, ['search_data']: searchData.flat()}
      })
      setArticles(manipulatedData)
    })
  }, [articles, locationPath])

  return (
    <div className="">
      <Navbar />
      <Routes>
        {/* <Route path='/' element={<ArticleContainer articles={articles} />} /> */}
        <Route path={`/articles/:selection`} element={<ArticleContainer articles={articles} />} />
        <Route path="*" element={<Navigate to={`/articles/${locationPath}`} replace />} />
      </Routes>
    </div>
  );
}

export default App;