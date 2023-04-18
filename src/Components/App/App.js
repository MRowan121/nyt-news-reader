import React, { useState, useEffect } from "react";
import { getArticles } from "../../Utilities/apiCalls";

const App = () => {

  const [articles, setArticles] = useState([])

  useEffect(() => {
    getArticles("movies")
    .then(data => setArticles(data.results))
    // .catch(error => this.setState({ error: `${error}`}))
  })

  return (
    <div className="">
      <header className=""></header>
      <h1>Test</h1>
    </div>
  );
}

export default App;