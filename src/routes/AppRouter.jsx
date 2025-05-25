import { BrowserRouter, Route, Routes } from "react-router"
import Header from "../components/header/Header"
import Home from "../pages/home/Home"
import Search from "../pages/search/Search"
import Categories from "../pages/categories/Categories"

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter