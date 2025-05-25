import styles from "./Header.module.css"
import Navbar from "../navbar/Navbar"
import { useState } from "react"
import { Link, useNavigate } from "react-router";
import ChangeTheme from "../theme/ChangeTheme";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

const Header = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const theme = useContext(ThemeContext);

  const handleSearch = (e) => {
    e.preventDefault()
    navigate("/search", {state: search})
    setSearch("")
  }

  return (
    <nav className={`${styles.navbar} ${theme.state.darkMode ? styles.dark : styles.white}`}>
      <h1><Link to="/">KNews</Link></h1>
      <Navbar />
      <ChangeTheme />
      <form onSubmit={handleSearch}>
        <input type="text" placeholder="Search for news..." value={search} onChange={(e) => setSearch(e.target.value)} required />
        <button type="submit">Search</button>
      </form>
    </nav>
  )
}

export default Header