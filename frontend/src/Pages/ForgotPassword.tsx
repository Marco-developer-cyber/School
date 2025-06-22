import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faArrowLeft, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import '../Styles/Auth.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Валидация
    if (!email) {
      setError('Введите email');
      return;
    }

    // Имитация отправки
    console.log('Запрос на восстановление для:', email);
    setIsSubmitted(true);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        {!isSubmitted ? (
          <>
            <h2>Восстановление пароля</h2>
            <p className="auth-subtext">
              Введите email, указанный при регистрации. Мы отправим ссылку для сброса пароля.
            </p>

            <form onSubmit={handleSubmit}>
              <div className={`input-group ${error ? 'error' : ''}`}>
                <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError('');
                  }}
                />
                {error && <span className="error-message">{error}</span>}
              </div>

              <button type="submit" className="auth-button">
                Отправить <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </form>
          </>
        ) : (
          <div className="auth-success">
            <h2>Письмо отправлено!</h2>
            <p>
              На адрес <strong>{email}</strong> отправлена инструкция по восстановлению пароля.
            </p>
          </div>
        )}

        <div className="auth-footer">
          <Link to="/login" className="back-link">
            <FontAwesomeIcon icon={faArrowLeft} /> Вернуться к входу
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;