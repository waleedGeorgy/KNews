import { useContext } from "react"
import styles from "./ChangeTheme.module.css"
import ThemeContext from "../../context/ThemeContext"
import { GoMoon } from "react-icons/go"
import { GoSun } from "react-icons/go";

const ChangeTheme = () => {
  const theme = useContext(ThemeContext);

  const themeToggle = () => {
    theme.dispatch({ type: "TOGGLE" });
  }

  return (
    <div className={styles.themeToggle} onClick={themeToggle}>
      {theme.state.darkMode ? <GoSun className={styles.sun} /> : <GoMoon className={styles.moon} />}
    </div>
  )
}

export default ChangeTheme