import { useLocation } from 'react-router';
import styles from './Search.module.css';
import NewsCard from "../../components/newsCard/NewsCard"
import useSearchNews from '../../hooks/useSearchNews';

const Search = () => {
  const {state} = useLocation();
  const {news, theme} = useSearchNews(state);

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