import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Sidebar } from "@/components/Sidebar";
import { Footer } from "@/components/Footer";

import { Inicio } from '@/pages/Inicio';
import { QueroDoar } from '@/pages/QueroDoar';
import { LivrosDoados } from '@/pages/LivrosDoados';
import { DetailsBook } from "@/pages/DetailsBook";
import { ErrorPage } from "@/pages/ErrorPage";

import s from './app.module.scss';

export const App = () => {
  return (
    <BrowserRouter>
      <div className={s.appContainer}>
        <Sidebar />
        <main className={s.mainContent}>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/queroDoar" element={<QueroDoar />} />
            <Route path="/livrosDoados" element={<LivrosDoados />} />
            <Route path="/detalhesLivro/:id" element={<DetailsBook />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </main>
      </div>
    </BrowserRouter>
  )
}