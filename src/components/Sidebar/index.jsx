import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaHome, FaBookOpen, FaHandHoldingHeart, FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import s from './sidebar.module.scss';
import Logo from '@/assets/img/logo.png';

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/livrosDoados?q=${encodeURIComponent(query)}`);
      if(window.innerWidth <= 768) setIsOpen(false);
    }
  };

  return (
    <>
      <button className={`${s.mobileToggle} ${isOpen ? s.toggleOpen : ''}`} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      
      <aside className={`${s.sidebar} ${isOpen ? s.open : ''}`}>
        <div className={s.logoContainer}>
          <img src={Logo} alt="Livraria Vai na Web" />
          <h1 className={s.logoTitle}>Vai na Web</h1>
        </div>

        <form className={s.searchContainer} onSubmit={handleSearch}>
          <input 
            type="text" 
            placeholder="Buscar livros..." 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">
            <FaSearch />
          </button>
        </form>

        <nav className={s.navLinks}>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? `${s.link} ${s.active}` : s.link}
            onClick={() => setIsOpen(false)}
          >
            <FaHome className={s.icon} />
            <span>Início</span>
          </NavLink>
          
          <NavLink 
            to="/livrosDoados" 
            className={({ isActive }) => isActive ? `${s.link} ${s.active}` : s.link}
            onClick={() => setIsOpen(false)}
          >
            <FaBookOpen className={s.icon} />
            <span>Livros Doados</span>
          </NavLink>

          <NavLink 
            to="/queroDoar" 
            className={({ isActive }) => isActive ? `${s.link} ${s.active}` : s.link}
            onClick={() => setIsOpen(false)}
          >
            <FaHandHoldingHeart className={s.icon} />
            <span>Quero Doar</span>
          </NavLink>
        </nav>
      </aside>
    </>
  );
};
