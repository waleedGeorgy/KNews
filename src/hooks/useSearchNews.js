import { useContext, useState, useEffect } from "react";
import ThemeContext from "../context/ThemeContext";
import axios from "axios";

const useSearchNews = (initialState = "") => {
    const [news, setNews] = useState("");
    const [state, setState] = useState(initialState);
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
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => { fetchNews() }, [url]);

    return {news, theme, state, setState}
}
export default useSearchNews;