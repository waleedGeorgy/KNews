import { Link, useNavigate } from "react-router"
import styles from "./Navbar.module.css"
import { MdBusinessCenter } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { MdOutlineScience } from "react-icons/md";
import { MdOutlineSportsSoccer } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import { PiMaskHappyBold } from "react-icons/pi";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

const Navbar = () => {
  const navigate = useNavigate();
  const theme = useContext(ThemeContext);

  return (
    <ul className={`${styles.topUl} ${theme.state.darkMode ? styles.dark : styles.white}`}>
      <li><Link to="/">Home</Link></li>
      <li>
        <p>Categories</p>
        <ul className={styles.bottomUl}>
          <li onClick={() => navigate("/categories", {state: {category: "general"}})}><TbWorld />General</li>
          <li onClick={() => navigate("/categories", {state: {category: "business"}})}><MdBusinessCenter />Business</li>
          <li onClick={() => navigate("/categories", {state: {category: "health"}})}><MdOutlineHealthAndSafety />Health</li>
          <li onClick={() => navigate("/categories", {state: {category: "science"}})}><MdOutlineScience />Science</li>
          <li onClick={() => navigate("/categories", {state: {category: "technology"}})}><GrTechnology />Technology</li>
          <li onClick={() => navigate("/categories", {state: {category: "sports"}})}><MdOutlineSportsSoccer />Sports</li>
          <li onClick={() => navigate("/categories", {state: {category: "entertainment"}})}><PiMaskHappyBold />Entertainment</li>
        </ul>
      </li>
    </ul>
  )
}

export default Navbar