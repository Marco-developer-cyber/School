import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '../Styles/Auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Валидация
    const newErrors = { email: '', password: '' };
    if (!email) newErrors.email = 'Введите email';
    if (!password) newErrors.password = 'Введите пароль';
    setErrors(newErrors);

    if (email && password) {
      // Отправка данных на сервер
      console.log('Отправка:', { email, password });
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Вход в аккаунт</h2>
        
        <form onSubmit={handleSubmit}>
          <div className={`input-group ${errors.email ? 'error' : ''}`}>
            <FontAwesomeIcon icon={faUser} className="input-icon" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className={`input-group ${errors.password ? 'error' : ''}`}>
            <FontAwesomeIcon icon={faLock} className="input-icon" />
            <input
              type="password"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>

          <div className="auth-options">
            <label>
              <input type="checkbox" /> Запомнить меня
            </label>
            <Link to="/forgot-password">Забыли пароль?</Link>
          </div>

          <button type="submit" className="auth-button">
            Войти <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </form>

        <div className="auth-footer">
          Нет аккаунта? <Link to="/register">Зарегистрируйтесь</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;