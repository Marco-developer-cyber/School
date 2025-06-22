import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Цвета школы (можешь поменять!)
  const themeColors = {
    primary: "#2E86AB", // Синий (основной)
    secondary: "#F18F01", // Оранжевый (акцент)
    light: "#F8F9FA", // Светлый фон
    dark: "#212529", // Тёмный текст
  };

  // Эффект для скролла
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Ссылки меню
  const navLinks = [
    { name: "Главная", path: "/" },
    { name: "Учебники", path: "/books" },
    { name: "Расписание", path: "/schedule" },
    { name: "Новости", path: "/news" },
    { name: "О школе", path: "/about" },
    { name: "Контакты", path: "/contacts" },
  ];

  return (
    <header
      className={`fixed-top py-2 transition-all ${
        isScrolled ? "bg-white shadow-sm" : "bg-light"
      }`}
      style={{
        borderBottom: isScrolled ? "none" : `1px solid rgba(0,0,0,0.1)`,
        transition: "0.5s",
      }}
    >
      <div className="container">
        <nav className="navbar navbar-expand-lg p-0">
          {/* Лого + название */}
          <Link to="/" className="navbar-brand d-flex align-items-center">
            {/* <img
              src="/logo.png" // Замени на свой логотип
              alt="Школа"
              className="me-2"
              style={{ height: "40px" }}
            /> */}
            <span className="fw-bold" style={{ color: themeColors.primary }}>
              Школа №12
            </span>
          </Link>

          {/* Бургер-кнопка для мобилок */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Меню"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Основное меню */}
          <div
            className={`collapse navbar-collapse ${
              isMobileMenuOpen ? "show" : ""
            }`}
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto">
              {navLinks.map((link) => (
                <li key={link.path} className="nav-item mx-1">
                  <Link
                    to={link.path}
                    className="nav-link fw-medium"
                    style={{ color: themeColors.dark }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Кнопка входа (опционально) */}
            <Link to={'/login'}>
              <button
                className="btn ms-lg-3"
                style={{
                  backgroundColor: themeColors.secondary,
                  color: "white",
                }}
              >
                Войти
              </button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
