import axios from "axios";
import styles from "./Home.module.css";
import { useState, useEffect, useContext } from "react";
import NewsCard from "../../components/newsCard/NewsCard"
import Slider from "../../components/slider/Slider"
import ThemeContext from "../../context/ThemeContext";

const Home = () => {
  const [topHeadlines, setTopHeadlines] = useState([]);
  const sliderNews = topHeadlines.splice(0,3);
  const theme = useContext(ThemeContext);

  const api_key = import.meta.env.VITE_API_KEY
  const country = "us"
  const url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${api_key}`

  const fetchTopHeadlines = async() => {
    try {
      const res = await axios.get(url);
      setTopHeadlines(res.data.articles);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchTopHeadlines();
  }, [url]);

  return (
    <main className={theme.state.darkMode ? styles.dark : styles.white}>
      <h2>Top news from <span>{country.toUpperCase()}</span> today</h2>
      <Slider news={sliderNews} />
      <div className={styles.mainNews}>
        {topHeadlines !== null && topHeadlines.map((item, index) => (<NewsCard key={index} {...item} />))}
      </div>
    </main>
  )
}

export default Home