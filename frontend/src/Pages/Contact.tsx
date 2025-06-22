import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faClock,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Contact.css";

const Contacts = () => {
  return (
    <div className="contacts-page">
      {/* Заголовок */}
      <section className="contacts-header">
        <div className="container">
          <h1>Контакты</h1>
          <p>Свяжитесь с нами удобным для вас способом</p>
        </div>
      </section>

      {/* Основной блок */}
      <div className="contacts-container">
        {/* Контактная информация */}
        <div className="contacts-info">
          <h2>Наши контакты</h2>

          <div className="contact-item">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
            <div>
              <h3>Адрес</h3>
              <p>г. Хива, ул. Гиламчи, д. 8</p>
            </div>
          </div>

          <div className="contact-item">
            <FontAwesomeIcon icon={faPhone} className="contact-icon" />
            <div>
              <h3>Телефон</h3>
              <p>+7 (495) 123-45-67</p>
              <p>+7 (495) 765-43-21 (факс)</p>
            </div>
          </div>

          <div className="contact-item">
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
            <div>
              <h3>Email</h3>
              <p>info@school1.ru (общие вопросы)</p>
              <p>director@school1.ru (директор)</p>
            </div>
          </div>

          <div className="contact-item">
            <FontAwesomeIcon icon={faClock} className="contact-icon" />
            <div>
              <h3>Часы работы</h3>
              <p>Пн-Сб: 8:00 - 18:00</p>
              <p>Вс: выходной</p>
            </div>
          </div>
        </div>

        {/* Форма обратной связи */}
        <div className="contacts-form">
          <h2>Напишите нам</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Ваше имя</label>
              <input type="text" id="name" placeholder="Иван Иванов" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="example@mail.ru"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Сообщение</label>
              <textarea
                id="message"
                rows={5}
                placeholder="Ваш вопрос..."
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              <FontAwesomeIcon icon={faPaperPlane} /> Отправить
            </button>
          </form>
        </div>

        {/* Карта */}
        <div className="contacts-map">
          <div style={{ position: 'relative', overflow: 'hidden' }}>
            <a
              href="https://yandex.uz/maps/org/157801795084/?utm_medium=mapframe&utm_source=maps"
              style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}
            >
              Средняя общеобразовательная школа № 12
            </a>
            <a
              href="https://yandex.uz/maps/10339/khiva/category/school/184106240/?utm_medium=mapframe&utm_source=maps"
              style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}
            >
              Общеобразовательная школа в Хиве
            </a>
            <iframe
              src="https://yandex.uz/map-widget/v1/?ll=60.376764%2C41.383862&mode=poi&poi%5Bpoint%5D=60.376164%2C41.383734&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D157801795084&z=17.53"
              width="1200"
              height="400"
              frameBorder="1"
              allowFullScreen={true}
              style={{ position: "relative" }}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
