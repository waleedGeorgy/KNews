import { useLocation } from "react-router";
import styles from "./Categories.module.css";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import ThemeContext from "../../context/ThemeContext";
import NewsCard from "../../components/newsCard/NewsCard";

const Categories = () => {
  const category = useLocation();
  const newsCategory = category.state.category;
  
  const [news, setNews] = useState([]);
  const [filter, setFilter] = useState("");
  const theme = useContext(ThemeContext);

  const api_key = import.meta.env.VITE_API_KEY;
  const url = `https://newsapi.org/v2/top-headlines?category=${newsCategory}&apiKey=${api_key}`
  const filterUrl = `https://newsapi.org/v2/top-headlines?country=${filter}&category=${newsCategory}&apiKey=${api_key}`

  const fetchCategoryNews = async(url) => {
    try {
      const res = await axios.get(url);
      setNews(res.data.articles);
    } catch (error) {
      console.log(error)
    }
  }

  const handleFilter = (e) => {
    e.preventDefault();
    fetchCategoryNews(filterUrl);
    setFilter("");
  }

  useEffect(() => { fetchCategoryNews(url) }, [url]);

  return (
    <div className={`${styles.container} ${theme.state.darkMode ? styles.dark : styles.white}`}>
    
      <div className={styles.categoryNewsHeader}>
        <form onSubmit={handleFilter}>
          <input type="text" required placeholder="Filter by country (ex. us, jp, ru...)" value={filter} onChange={(e) => setFilter(e.target.value)} />
          <button type="submit">Filter</button>
        </form>
        {news.length > 0 ? <h2><span>{newsCategory.charAt(0).toUpperCase() + newsCategory.slice(1, newsCategory.length)}</span> News</h2> : <h2>No news for today...</h2>}
      </div>

      <div className={styles.categoryNewsContainer}>
        {news !== null && news.map((item, index) => (<NewsCard key={index} {...item} />))}
      </div>
    </div>
  )
}

export default Categories