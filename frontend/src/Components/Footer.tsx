import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faClock
} from '@fortawesome/free-solid-svg-icons';
import { 
  faVk, 
  faTelegram, 
  faYoutube 
} from '@fortawesome/free-brands-svg-icons';
import '../Styles/Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        
        {/* Лого и описание */}
        <div className="footer-section">
          <div className="footer-logo">
            <h3>Школа №12</h3>
          </div>
          <p>
            Современное образование для будущего поколения. 
            Мы стремимся к знаниям и инновациям.
          </p>
        </div>

        {/* Контакты */}
        <div className="footer-section">
          <h4>Контакты</h4>
          <ul className="footer-contacts">
            <li>
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span>г. Хива, ул. Гиламчи, 8</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} />
              <span>+7 (495) 123-45-67</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} />
              <span>school1@edu.ru</span>
            </li>
            <li>
              <FontAwesomeIcon icon={faClock} />
              <span>Пн-Сб: 8:00 - 18:00</span>
            </li>
          </ul>
        </div>

        {/* Быстрые ссылки */}
        <div className="footer-section">
          <h4>Разделы</h4>
          <ul className="footer-links">
            <li><a href="/">Главная</a></li>
            <li><a href="/about">О школе</a></li>
            <li><a href="/schedule">Расписание</a></li>
            <li><a href="/books">Учебники</a></li>
            <li><a href="/news">Новости</a></li>
          </ul>
        </div>

        {/* Соцсети */}
        <div className="footer-section">
          <h4>Мы в соцсетях</h4>
          <div className="social-links">
            <a href="https://vk.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faVk} />
            </a>
            <a href="https://t.me" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTelegram} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>
      </div>

      {/* Копирайт */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Школа №12. Все права защищены.</p>
      </div>
    </footer>
  );
};

export default Footer;