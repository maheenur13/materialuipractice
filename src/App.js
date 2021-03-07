// import logo from './logo.svg';
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';


function App() {
  const [articles, setArticles]=useState([]);
  useEffect(()=> {
    const url ='http://newsapi.org/v2/everything?q=tesla&from=2021-02-07&sortBy=publishedAt&apiKey=deaf26d1126640398a2d516f52214b08'
    fetch(url)
    .then(res =>res.json())
    .then(data=>setArticles(data.articles));
  },[])
  return (
    
    <>
      <h1>{articles.length}</h1>
      {
        articles.map(article=> <Header style={{display:'flex',justifyContent: 'center',alignItems: 'center',padding:'20px'}} className="news-color" article={article} ></Header>)
      }
      
    </>
  );
}

export default App;
