import { useState } from "react";
import Logo from "@/assets/img/logo.png";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

import { Inicio } from '@/pages/Inicio';
import { QueroDoar } from '@/pages/QueroDoar';
import { LivrosDoados } from '@/pages/LivrosDoados';
import { DetailsBook } from "@/pages/DetailsBook";
import { ErrorPage } from "@/pages/ErrorPage";

import s from './header.module.scss';

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
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
