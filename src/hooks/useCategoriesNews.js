import { useContext, useState, useEffect } from "react";
import ThemeContext from "../context/ThemeContext";
import axios from "axios";

const useCategoriesNews = (initialFilter = "", initialCategory = "") => {
    const [news, setNews] = useState([]);
    const [filter, setFilter] = useState(initialFilter);
    const [category, setCategory] = useState(initialCategory);
    const theme = useContext(ThemeContext);
    
    const api_key = import.meta.env.VITE_API_KEY;
    const url = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${api_key}`
    const filterUrl = `https://newsapi.org/v2/top-headlines?country=${filter}&category=${category}&apiKey=${api_key}`

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
    useEffect(() => {}, [filterUrl]);

    return {news, filter, category, theme, handleFilter, setCategory, setFilter}
}
export default useCategoriesNews;