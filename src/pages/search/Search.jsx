import { useLocation } from 'react-router';
import styles from './Search.module.css';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import NewsCard from "../../components/newsCard/NewsCard"
import { useContext } from 'react';
import ThemeContext from '../../context/ThemeContext';

const Search = () => {
  const {state} = useLocation()
  const [news, setNews] = useState("");
  const theme = useContext(ThemeContext);

  const api_key = import.meta.env.VITE_API_KEY
  const url = `https://newsapi.org/v2/top-headlines?q=${state}&apiKey=${api_key}`

  const fetchNews = async() => {
    try {
      const res = await axios.get(url);
      setNews(res.data.articles);
    } catch (error) {
      console.log(error);
    }
  }
  
  useEffect(() => { fetchNews() }, [url]);

  return (
    <div className={`${styles.searchResultsArea} ${theme.state.darkMode ? styles.dark : styles.white}`}>
        {news.length == 0 && <h2>No news about the searched query</h2>}
        {news.length > 0 && <h2>News about: <span>{state}</span></h2>}
        <div className={styles.searchResultsCards}>
          {news.length > 0 && news.map((item, index) => <NewsCard key={index} {...item} />)}
        </div>
    </div>
  )
}

export default Search