import { Link } from "react-router-dom"
import Logo from "../../assets/img/logo.png"
import { FaSearch } from "react-icons/fa"

import { Inicio } from '../../pages/Inicio'
import { QueroDoar } from '../../pages/QueroDoar'
import { LivrosDoados } from '../../pages/LivrosDoados'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import { logoIcon, navegation, searchBar } from './header.module.scss'

export const Header = () => {
  return (
    <BrowserRouter>
      <header>
        <section className={logoIcon}>
          <img src={Logo} alt="logotipo da livraria" />
          <h1>Livros Vai na Web</h1>
        </section>
        <nav className={navegation}>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/livrosDoados">Livros Doados</Link></li>
            <li><Link to="/queroDoar">Quero Doar</Link></li>
          </ul>
        </nav>
        <section className={searchBar}>
          <input 
          type="search" 
          name="search" 
          id="search"
          placeholder="O que você procura?" />
          <button>
            <FaSearch />
          </button>
        </section>
      </header>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/queroDoar" element={<QueroDoar />} />
        <Route path="/livrosDoados" element={<LivrosDoados />} />
      </Routes>
    </BrowserRouter>
  )
}
