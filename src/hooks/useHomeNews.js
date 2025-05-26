import { useContext } from "react";
import { useState } from "react";
import ThemeContext from "../context/ThemeContext";
import axios from "axios";
import { useEffect } from "react";

const useHomeNews = () => {
    const [news, setNews] = useState([]);

    const theme = useContext(ThemeContext);

    const api_key = import.meta.env.VITE_API_KEY;
    const country = "us"
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${api_key}`

    const fetchTopHeadlines = async() => {
        try {
        const res = await axios.get(url);
        setNews(res.data.articles);
        } catch (error) {
        console.log(error);
        }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { fetchTopHeadlines() }, [url]);

    return {news, country, theme}
}
export default useHomeNews