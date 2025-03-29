import { Link } from "react-router-dom";
import Logo from "@/assets/img/logo.png";
import { FaSearch } from "react-icons/fa";

import { Inicio } from '@/pages/Inicio';
// import {Login} from '../../pages/login';
import { QueroDoar } from '@/pages/QueroDoar';
import { LivrosDoados } from '@/pages/LivrosDoados';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import s from './header.module.scss';
import { useState } from "react";
import { DetailsBook } from "../../pages/DetailsBook";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <BrowserRouter>
      <header className={s.header}>
        <button className={s.toggleButton} onClick={toggleMenu}>
          ☰
        </button>
        <section className={s.logoIcon}>
          <img src={Logo} alt="logotipo da livraria" />
          <h1>Livros Vai na Web</h1>
        </section>
        <nav className={`${s.navegation} ${menuOpen ? s.active : ''}`}>
          <ul>
            <li><Link to="/" onClick={() => setMenuOpen(false)}>Inicio</Link></li>
            <li><Link to="/livrosDoados" onClick={() => setMenuOpen(false)}>Livros Doados</Link></li>
            <li><Link to="/queroDoar" onClick={() => setMenuOpen(false)}>Quero Doar</Link></li>
          </ul>
        </nav>
        <section className={s.searchBar}>
          <input
            type="search"
            name="search"
            id="search"
            placeholder="O que você procura?"
          />
          <button>
            <FaSearch />
          </button>
        </section>
      </header>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/queroDoar" element={<QueroDoar />} />
        <Route path="/livrosDoados" element={<LivrosDoados />} />
        <Route path="/detalhesLivro/:id" element={<DetailsBook />} />
      </Routes>
    </BrowserRouter>
  );
};
