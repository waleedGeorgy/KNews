import { useLocation } from "react-router";
import styles from "./Categories.module.css";
import NewsCard from "../../components/newsCard/NewsCard";
import useCategoriesNews from "../../hooks/useCategoriesNews";

const Categories = () => {
  const category = useLocation();
  const newsCategory = category.state.category;

  const {news, theme, filter, handleFilter, setFilter} = useCategoriesNews("", newsCategory);

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