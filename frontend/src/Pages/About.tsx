import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHistory, 
  faTrophy, 
  faChalkboardTeacher,
  faPhone,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import '../Styles/About.css';

const About = () => {
  // Данные для галереи
  const galleryImages = [
    { id: 1, src: '/about/school-building.jpg', alt: 'Здание школы' },
    { id: 2, src: '/about/classroom.jpg', alt: 'Учебный класс' },
    { id: 3, src: '/about/library.jpg', alt: 'Школьная библиотека' },
    { id: 4, src: '/about/sport-hall.jpg', alt: 'Спортивный зал' },
  ];

  // Достижения школы
  const achievements = [
    { year: '2023', title: 'Лучшая школа района', desc: 'По результатам независимого рейтинга' },
    { year: '2022', title: '100 баллов на ЕГЭ', desc: '5 выпускников получили высший балл' },
    { year: '2021', title: 'Победители олимпиад', desc: '12 призовых мест в регионе' },
  ];

  return (
    <div className="about-page">
      {/* Герой-секция */}
      <section className="about-hero">
        <div className="container">
          <h1>О нашей школе</h1>
          <p>Качественное образование с 1995 года</p>
        </div>
      </section>

      {/* История школы */}
      <section className="history-section">
        <div className="container">
          <div className="section-header">
            <FontAwesomeIcon icon={faHistory} className="section-icon" />
            <h2>Наша история</h2>
          </div>
          <div className="history-content">
            <div className="history-text">
              <p>
                Школа №12 была основана в 1986 году как инновационное образовательное учреждение. 
                За 39 лет мы выпустили более 15000 учеников, многие из которых стали выдающимися специалистами 
                в различных областях.
              </p>
              <p>
                В 2010 году школа получила статус "Центра образовательных инноваций", а в 2018 году 
                вошла в топ-30 лучших школ области по версии Министерства образования.
              </p>
            </div>
            <div className="history-image">
              <img 
                src="/about/old-photo.jpg" 
                alt="Школа в 1986 году" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Галерея */}
      <section className="gallery-section">
        <div className="container">
          <h2>Фотогалерея</h2>
          <div className="gallery-grid">
            {galleryImages.map((image) => (
              <div key={image.id} className="gallery-item">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="gallery-img"
                />
                <div className="gallery-overlay">
                  <p>{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Достижения */}
      <section className="achievements-section">
        <div className="container">
          <div className="section-header">
            <FontAwesomeIcon icon={faTrophy} className="section-icon" />
            <h2>Наши достижения</h2>
          </div>
          <div className="achievements-grid">
            {achievements.map((item, index) => (
              <div key={index} className="achievement-card">
                <div className="achievement-year">{item.year}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Видео-презентация */}
      <section className="video-section">
        <div className="container">
          <h2>Видео о школе</h2>
          <div className="video-wrapper">
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/VIDEO_ID" 
              title="Видео презентация школы" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Контакты администрации */}
      <section className="contacts-section">
        <div className="container">
          <div className="section-header">
            <FontAwesomeIcon icon={faChalkboardTeacher} className="section-icon" />
            <h2>Администрация</h2>
          </div>
          <div className="contacts-grid">
            <div className="contact-card">
              <h3>Директор</h3>
              <p>Аширов Шухрат Шавкатович</p>
              <div className="contact-info">
                <FontAwesomeIcon icon={faPhone} />
                <span>+7 (495) 111-22-33</span>
              </div>
              <div className="contact-info">
                <FontAwesomeIcon icon={faEnvelope} />
                <span>director@school1.ru</span>
              </div>
            </div>
            <div className="contact-card">
              <h3>Завуч</h3>
              <p>Настя Ахмедовна</p>
              <div className="contact-info">
                <FontAwesomeIcon icon={faPhone} />
                <span>+7 (495) 222-33-44</span>
              </div>
              <div className="contact-info">
                <FontAwesomeIcon icon={faEnvelope} />
                <span>zavuch@school1.ru</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;