import { useContext } from "react"
import styles from "./NewsCard.module.css"
import ThemeContext from "../../context/ThemeContext"
import newsImage from "../../assets/news.jpg";

const NewsCard = ({author, url, description, publishedAt, urlToImage, source, title}) => {
  const theme = useContext(ThemeContext);

  return (
    <div className={`${styles.newsCard} ${theme.state.darkMode ? styles.dark : styles.white}`}>
      <img src={urlToImage !== null ? urlToImage : newsImage} alt={title} />
      <div className={styles.cardBody}>
        <h3>{title}</h3>
        {(author !== null && author !== '') && <h4>By: <span>{author}</span></h4>}
        <p>{description}</p>
        <h5>{source.name}</h5>
        <small>Published at: <span>{publishedAt.split("T")[0]}</span></small>
        <a href={url} target="_blank">Details</a>
      </div>
    </div>
  )
}

export default NewsCard