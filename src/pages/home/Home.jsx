import styles from "./Home.module.css";
import NewsCard from "../../components/newsCard/NewsCard"
import Slider from "../../components/slider/Slider"
import useHomeNews from "../../hooks/useHomeNews";

const Home = () => {
  const {news, country, theme} = useHomeNews();
  const sliderNews = news.splice(0,3);

  return (
    <main className={theme.state.darkMode ? styles.dark : styles.white}>
      <h2>Top news from <span>{country.toUpperCase()}</span> today</h2>
      <Slider news={sliderNews} />
      <div className={styles.mainNews}>
        {news !== null && news.map((item, index) => (<NewsCard key={index} {...item} />))}
      </div>
    </main>
  )
}

export default Home