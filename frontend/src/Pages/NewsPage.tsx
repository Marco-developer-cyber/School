import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCalendarAlt, 
  faComments,
  faArrowRight,
  faSearch,
  faTag,
  faChevronLeft,
  faChevronRight,
  faFilter,
  faArrowUp
} from '@fortawesome/free-solid-svg-icons';
import "../Styles/News.css";

// Моковые данные для новостей
const mockNews = [
  {
    id: 1,
    title: "Открытие нового компьютерного класса",
    date: "15 июня 2025",
    image: "https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    excerpt: "В нашей школе состоялось торжественное открытие нового компьютерного класса, оснащенного современным оборудованием...",
    category: "События",
    comments: 8
  },
  {
    id: 2,
    title: "Победа в городской олимпиаде по математике",
    date: "10 июня 2025",
    image: "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    excerpt: "Ученики нашей школы заняли первое место в городской олимпиаде по математике. Поздравляем наших талантливых математиков!",
    category: "Достижения",
    comments: 12
  },
  {
    id: 3,
    title: "Летний лагерь 2025: открыт набор",
    date: "5 июня 2025",
    image: "https://images.unsplash.com/photo-1472898965229-f9b06b9c9bbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    excerpt: "Открыт набор в летний школьный лагерь. В программе: спортивные мероприятия, творческие мастер-классы, экскурсии...",
    category: "Анонсы",
    comments: 5
  },
  {
    id: 4,
    title: "Встреча с известным писателем",
    date: "1 июня 2025",
    image: "https://images.unsplash.com/photo-1531989417401-0f85f7e673f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    excerpt: "В нашей школе прошла встреча с известным детским писателем. Ученики смогли задать вопросы и получить автографы...",
    category: "События",
    comments: 7
  },
  {
    id: 5,
    title: "Обновление школьной библиотеки",
    date: "25 мая 2025",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    excerpt: "Школьная библиотека пополнилась новыми книгами. Теперь в нашем фонде более 10 000 изданий для учебы и досуга...",
    category: "Обновления",
    comments: 3
  },
  {
    id: 6,
    title: "Спортивные достижения наших учеников",
    date: "20 мая 2025",
    image: "https://images.unsplash.com/photo-1576858574144-9ae1ebcf5ae5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    excerpt: "Наши ученики заняли призовые места на городских соревнованиях по легкой атлетике. Поздравляем спортсменов и их тренеров!",
    category: "Достижения",
    comments: 9
  },
  {
    id: 7,
    title: "Международный день защиты детей в нашей школе",
    date: "1 июня 2025",
    image: "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    excerpt: "В нашей школе прошел праздник, посвященный Международному дню защиты детей. Ученики участвовали в конкурсах, играх и мастер-классах...",
    category: "События",
    comments: 6
  },
  {
    id: 8,
    title: "Новое оборудование для кабинета физики",
    date: "28 мая 2025",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    excerpt: "Кабинет физики пополнился новым современным оборудованием для проведения лабораторных работ и демонстрации экспериментов...",
    category: "Обновления",
    comments: 4
  },
  {
    id: 9,
    title: "Экскурсия в исторический музей",
    date: "15 мая 2025",
    image: "https://images.unsplash.com/photo-1566127992631-137a642a90f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    excerpt: "Ученики 7-х классов посетили исторический музей города. Экскурсия была посвящена истории родного края и его культурному наследию...",
    category: "События",
    comments: 7
  },
  {
    id: 10,
    title: "Школьный театр представляет новый спектакль",
    date: "10 мая 2025",
    image: "https://images.unsplash.com/photo-1503095396549-807759245b35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    excerpt: "Школьный театральный кружок представляет новый спектакль по произведению А.П. Чехова. Премьера состоится в актовом зале школы...",
    category: "Анонсы",
    comments: 8
  },
  {
    id: 11,
    title: "Победа в региональном конкурсе проектов",
    date: "5 мая 2025",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    excerpt: "Проект учеников 10 класса 'Экологическое будущее нашего города' занял первое место в региональном конкурсе исследовательских работ...",
    category: "Достижения",
    comments: 10
  }
];

// Категории для фильтрации
const categories = [
  "Все",
  "События",
  "Достижения",
  "Анонсы",
  "Обновления"
];

const NewsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Все");
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const [dateFilter, setDateFilter] = useState({ from: "", to: "" });
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  
  const itemsPerPage = 4; // Количество новостей на странице
  
  // Эффект для имитации загрузки данных
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Эффект для отслеживания прокрутки страницы
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Функция для прокрутки страницы вверх
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  // Фильтрация новостей
  const filteredNews = mockNews.filter(news => {
    const matchesSearch = news.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         news.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Все" || news.category === selectedCategory;
    
    // Фильтрация по дате
    let matchesDate = true;
    if (dateFilter.from || dateFilter.to) {
      const newsDate = new Date(news.date.split(' ')[0] + ' ' + news.date.split(' ')[1] + ' ' + news.date.split(' ')[2]);
      
      if (dateFilter.from) {
        const fromDate = new Date(dateFilter.from);
        matchesDate = matchesDate && newsDate >= fromDate;
      }
      
      if (dateFilter.to) {
        const toDate = new Date(dateFilter.to);
        matchesDate = matchesDate && newsDate <= toDate;
      }
    }
    
    return matchesSearch && matchesCategory && matchesDate;
  });
  
  // Пагинация
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredNews.slice(indexOfFirstItem, indexOfLastItem);
  
  // Функция для изменения страницы
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  // Генерация номеров страниц для пагинации
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;
    
    if (totalPages <= maxPagesToShow) {
      // Если страниц меньше или равно maxPagesToShow, показываем все
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Всегда показываем первую страницу
      pageNumbers.push(1);
      
      // Определяем диапазон страниц вокруг текущей
      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);
      
      // Если текущая страница близка к началу
      if (currentPage <= 3) {
        endPage = 4;
      }
      
      // Если текущая страница близка к концу
      if (currentPage >= totalPages - 2) {
        startPage = totalPages - 3;
      }
      
      // Добавляем многоточие после первой страницы, если нужно
      if (startPage > 2) {
        pageNumbers.push('...');
      }
      
      // Добавляем страницы из диапазона
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
      
      // Добавляем многоточие перед последней страницей, если нужно
      if (endPage < totalPages - 1) {
        pageNumbers.push('...');
      }
      
      // Всегда показываем последнюю страницу
      pageNumbers.push(totalPages);
    }
    
    return pageNumbers;
  };
  
  // Анимация для карточек новостей
  const getAnimationDelay = (index: number) => {
    return `${0.1 + index * 0.1}s`;
  };
  
  // Сброс фильтров
  const resetFilters = () => {
    setSearchTerm("");
    setSelectedCategory("Все");
    setDateFilter({ from: "", to: "" });
    setCurrentPage(1);
  };

  return (
    <div className="news-page">
      {/* Заголовок */}
      <section className="news-header">
        <div className="container">
          <h1>Школьные новости</h1>
          <p>Будьте в курсе последних событий нашей школы</p>
        </div>
      </section>

      {/* Основной контент */}
      <div className="news-container">
      {/* Фильтры и поиск */}
        <div className="filters-container">
          <div className="filters-main">
            {/* Категории */}
            <div className="categories">
              {categories.map(category => (
                <button 
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                >
                  {category === "Все" ? category : (
                    <>
                      <FontAwesomeIcon icon={faTag} />
                      {category}
                    </>
                  )}
                </button>
              ))}
            </div>
            
            {/* Поиск */}
            <div className="search">
              <input 
                type="text"
                placeholder="Поиск новостей..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FontAwesomeIcon icon={faSearch} />
            </div>
            
            {/* Кнопка дополнительных фильтров */}
            <button 
              className="filter-toggle-btn"
              onClick={() => setShowFilters(!showFilters)}
            >
              <FontAwesomeIcon icon={faFilter} />
              Фильтры
            </button>
          </div>
          
          {/* Дополнительные фильтры */}
          {showFilters && (
            <div className="advanced-filters">
              <div className="date-filters">
                <div className="date-filter">
                  <label>С даты:</label>
                  <input 
                    type="date" 
                    value={dateFilter.from}
                    onChange={(e) => setDateFilter({...dateFilter, from: e.target.value})}
                  />
                </div>
                <div className="date-filter">
                  <label>По дату:</label>
                  <input 
                    type="date" 
                    value={dateFilter.to}
                    onChange={(e) => setDateFilter({...dateFilter, to: e.target.value})}
                  />
                </div>
              </div>
              <button 
                className="reset-filters-btn"
                onClick={resetFilters}
              >
                Сбросить фильтры
              </button>
            </div>
          )}
        </div>

        {/* Список новостей */}
        {isLoading ? (
          <div className="news-loading">
            <div className="news-loading-spinner"></div>
            <p>Загрузка новостей...</p>
          </div>
        ) : filteredNews.length > 0 ? (
          <div className="news-grid">
            {currentItems.map((news, index) => (
              <div 
                key={news.id} 
                className="news-card"
                style={{ animationDelay: getAnimationDelay(index) }}
              >
                <div className="news-card-image">
                  <img src={news.image} alt={news.title} />
                </div>
                <div className="news-card-content">
                  <div className="news-card-date">
                    <FontAwesomeIcon icon={faCalendarAlt} />
                    {news.date}
                  </div>
                  <h3>{news.title}</h3>
                  <p>{news.excerpt}</p>
                  <div className="news-card-footer">
                    <div className="news-card-comments">
                      <FontAwesomeIcon icon={faComments} />
                      {news.comments} комментариев
                    </div>
                    <Link to={`/news/${news.id}`} className="read-more">
                      Читать далее <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ 
            textAlign: 'center', 
            padding: '3rem 0',
            color: '#666'
          }}>
            <h3>Новости не найдены</h3>
            <p>Попробуйте изменить параметры поиска</p>
          </div>
        )}

        {/* Пагинация */}
        {filteredNews.length > 0 && totalPages > 1 && (
          <div className="pagination">
            <button 
              className="pagination-arrow" 
              onClick={() => currentPage > 1 && paginate(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            
            {getPageNumbers().map((number, index) => (
              <div 
                key={index}
                className={`pagination-item ${number === currentPage ? 'active' : ''} ${number === '...' ? 'dots' : ''}`}
                onClick={() => number !== '...' && paginate(number as number)}
              >
                {number}
              </div>
            ))}
            
            <button 
              className="pagination-arrow" 
              onClick={() => currentPage < totalPages && paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        )}
        
        {/* Кнопка "Наверх" */}
        {showBackToTop && (
          <button className="back-to-top" onClick={scrollToTop}>
            <FontAwesomeIcon icon={faArrowUp} />
          </button>
        )}
      </div>
    </div>
  );
};

export default NewsPage;
