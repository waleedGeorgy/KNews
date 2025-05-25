import { useState } from "react"
import styles from "./Slider.module.css"
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { IoNewspaperOutline } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import { useEffect } from "react";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import newsImage from "../../assets/news.jpg";

const Slider = ({news}) => {
  const [current, setCurrent] = useState(0);
  const theme = useContext(ThemeContext);
  /*
  To execute code after an interval in React, the setInterval function can be used within a useEffect hook.
  This ensures the interval is set up when the component mounts and cleared when it unmounts, preventing memory leaks. 
  */
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrent(current === news.length - 1 ? 0 : current + 1)
    }, 6000);
    return () => clearInterval(intervalId);
  }, [current]);

  const nextSlide = () => {
    setCurrent(current === news.length - 1 ? 0 : current + 1);
  }
  const prevSlide = () => {
    setCurrent(current === 0 ? news.length - 1 : current - 1);
  }

  if (!Array.isArray(news) || news.length <= 0) {
    return null;
  }

  return (
    <div className={`${styles.slider} ${theme.state.darkMode ? styles.dark : styles.white}`}>
      <FaArrowAltCircleLeft onClick={prevSlide} className={styles.leftArr} size={40} />
      <FaArrowAltCircleRight onClick={nextSlide} className={styles.rightArr} size={40} />
      {
        news.map((item, index) => {
          return (
            <div key={index}>
              {
                current === index && (
                  <div className={styles.sliderBody}>
                    <img src={item.urlToImage !== null ? item.urlToImage : newsImage} alt={item.title} />
                    <h2>{item.title}</h2>
                    <div className={styles.sliderFooter}>
                      {(item.author !== null && item.author !== '') && <h4><FaRegUserCircle className={styles.sliderFooterIcon} /> <span>{item.author}</span></h4>}
                      <h4><IoNewspaperOutline className={styles.sliderFooterIcon} /> {item.source.name}</h4>
                      <h4><FaRegCalendarAlt className={styles.sliderFooterIcon} /> <span>{item.publishedAt.split("T")[0]}</span></h4>
                    </div>
                    <a href={item.url} target="_blank">Details</a>
                  </div>
                )
              }
            </div>
          )
        })
      }
    </div>
  )
}

export default Slider