import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEnvelope, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import '../Styles/Auth.css';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Валидация
    const newErrors = {
      name: !formData.name ? 'Введите имя' : '',
      email: !formData.email ? 'Введите email' : '',
      password: !formData.password ? 'Введите пароль' : 
               formData.password.length < 6 ? 'Пароль слишком короткий' : '',
      confirmPassword: formData.password !== formData.confirmPassword ? 'Пароли не совпадают' : ''
    };
    setErrors(newErrors);

    if (!Object.values(newErrors).some(error => error)) {
      // Отправка данных
      console.log('Регистрация:', formData);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Регистрация</h2>
        
        <form onSubmit={handleSubmit}>
          <div className={`input-group ${errors.name ? 'error' : ''}`}>
            <FontAwesomeIcon icon={faUser} className="input-icon" />
            <input
              type="text"
              name="name"
              placeholder="Имя"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          <div className={`input-group ${errors.email ? 'error' : ''}`}>
            <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className={`input-group ${errors.password ? 'error' : ''}`}>
            <FontAwesomeIcon icon={faLock} className="input-icon" />
            <input
              type="password"
              name="password"
              placeholder="Пароль"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>

          <div className={`input-group ${errors.confirmPassword ? 'error' : ''}`}>
            <FontAwesomeIcon icon={faLock} className="input-icon" />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Повторите пароль"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <span className="error-message">{errors.confirmPassword}</span>
            )}
          </div>

          <button type="submit" className="auth-button">
            Зарегистрироваться <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </form>

        <div className="auth-footer">
          Уже есть аккаунт? <Link to="/login">Войдите</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;