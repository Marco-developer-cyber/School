import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainMenu from "./MainMenu";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Contacts from "./Pages/Contact";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import NotFound from "./Pages/NotFound";
import NewsPage from "./Pages/NewsPage";
import NewsDetailPage from "./Pages/NewsDetailPage";
import ForgotPassword from "./Pages/ForgotPassword";
import About from "./Pages/About";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/:id" element={<NewsDetailPage />} />
        <Route path="*" element={<NotFound />} />
        {/* Добавь другие маршруты по мере необходимости */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
