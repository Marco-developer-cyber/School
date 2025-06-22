import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSadTear } from '@fortawesome/free-solid-svg-icons';
import '../Styles/Errors.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <div className="error-icon">
          <FontAwesomeIcon icon={faSadTear} />
          <span>404</span>
        </div>
        <h1>Страница не найдена</h1>
        <p>
          Запрашиваемая страница не существует или была перемещена.
        </p>
        <Link to="/" className="home-button">
          <FontAwesomeIcon icon={faHome} /> На главную
        </Link>
      </div>
    </div>
  );
};

export default NotFound;