// import logo from './logo.svg';
import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import NewsNumber from './Components/NewsNumber/NewsNumber';


function App() {
  const [articles, setArticles]=useState([]);
  // console.log(articles);
  useEffect(()=> {
    const url ='http://newsapi.org/v2/everything?q=tesla&from=2021-02-07&sortBy=publishedAt&apiKey=deaf26d1126640398a2d516f52214b08'
    fetch(url)
    .then(res =>res.json())
    .then(data=>setArticles(data.articles));
  },[])
  return (
    
    <>
    <NewsNumber articles={articles}></NewsNumber>
    <div className="news-color">
      {
        articles.map(article=> <Header  article={article} ></Header>)
      }
      </div>
      
    </>
  );
}

export default App;
