import React, { useState, useEffect } from "react";
import { getArticles } from "../Utilities/apiCalls";
import Navbar from "./Navbar";
import ArticleContainer from "./ArticleContainer";
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Search from "./Search";

function App() {

  const [articles, setArticles] = useState([])
  const [locationPath, setPath] = useState("home")
  const [search, setSearch] = useState([])
  
  const location = useLocation()

  useEffect(() => {
      const category = location.pathname.split("/")[2]
      setPath(category)
      setSearch([])
  }, [location.pathname])
 
  useEffect(() => {
    getArticles(locationPath)
    .then(data => {
      const manipulatedData = data.results.map(obj => {
        const searchData = [obj.des_facet, obj.org_facet, obj.per_facet, obj.geo_facet]
        const editedSearchData = searchData.flat().map(e => e.toLowerCase())
        return {...obj, search_data: editedSearchData}
      })
      setArticles(manipulatedData)
    })
  }, [articles, locationPath])

  const handleSearch = (input) => {
    const filteredArticles = articles.filter(obj => obj.search_data.find(str => str.includes(input.toLowerCase())))
    setSearch(filteredArticles)
  }

  return (
    <div className="bg-gray-700 min-h-screen">
      <Search handleSearch={handleSearch} />
      <Navbar />
      <Routes>
        <Route path={`/articles/:selection`} element={<ArticleContainer articles={search.length ? search : articles} />} />
        <Route path="*" element={<Navigate to={`/articles/${locationPath}`} replace />} />
      </Routes>
    </div>
  );
}

export default App;