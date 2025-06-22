import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBookOpen, 
  faCalendarAlt, 
  faBell,
  faGraduationCap,
  faChalkboardTeacher,
  faUsers
} from '@fortawesome/free-solid-svg-icons';
import "../Styles/HomePage.css";

const HomePage = () => {
  const [studentCount, setStudentCount] = useState(0);
  const [teacherCount, setTeacherCount] = useState(0);

  useEffect(() => {
    const animateNumbers = () => {
      let step = 0;
      const interval = setInterval(() => {
        step += 1;
        setStudentCount(prev => Math.min(prev + 20, 850));
        setTeacherCount(prev => Math.min(prev + 1, 45));
        if (step >= 45) clearInterval(interval);
      }, 50);
    };
    animateNumbers();
  }, []);

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Добро пожаловать в <span>Школу №1</span></h1>
          <p>Инновационное обучение для будущих лидеров</p>
          <div className="hero-buttons">
            <Link to="/books" className="btn-primary">
              <FontAwesomeIcon icon={faBookOpen} /> Учебники
            </Link>
            <Link to="/schedule" className="btn-secondary">
              <FontAwesomeIcon icon={faCalendarAlt} /> Расписание
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-glow"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stat-card">
          <FontAwesomeIcon icon={faGraduationCap} className="stat-icon" />
          <h3>{studentCount}+</h3>
          <p>Учеников</p>
        </div>
        <div className="stat-card">
          <FontAwesomeIcon icon={faChalkboardTeacher} className="stat-icon" />
          <h3>{teacherCount}+</h3>
          <p>Преподавателей</p>
        </div>
        <div className="stat-card">
          <FontAwesomeIcon icon={faUsers} className="stat-icon" />
          <h3>11</h3>
          <p>Классов</p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Наши ресурсы</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="card-icon">
              <FontAwesomeIcon icon={faBookOpen} />
            </div>
            <h3>Учебники онлайн</h3>
            <p>Полная база учебных материалов</p>
            <Link to="/books">Перейти →</Link>
          </div>
          
          <div className="service-card">
            <div className="card-icon">
              <FontAwesomeIcon icon={faCalendarAlt} />
            </div>
            <h3>Расписание</h3>
            <p>Актуальное расписание занятий</p>
            <Link to="/schedule">Перейти →</Link>
          </div>
          
          <div className="service-card">
            <div className="card-icon">
              <FontAwesomeIcon icon={faBell} />
            </div>
            <h3>Новости</h3>
            <p>Последние школьные новости</p>
            <Link to="/news">Перейти →</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;