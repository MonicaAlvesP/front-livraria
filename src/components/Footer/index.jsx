import s from '../../styles/modules/footer.module.scss';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer>
      <section className={s.socialIcons}>
        <p>4002 - 8922</p>
        <div className={s.icons}>
          <a href="https://www.facebook.com/vainaweb" target='_blank'><FaFacebook /></a>
          <a href="https://x.com/vainaweb" target='_blank'><FaTwitter /></a>
          <a href="https://www.youtube.com/@VaiNaWeb" target='_blank'><FaYoutube /></a>
          <a href="https://www.linkedin.com/company/vainaweb/posts/?feedView=all" target='_blank'><FaLinkedin /></a>
          <a href="https://www.instagram.com/vainaweb/" target='_blank'><FaInstagram /></a>
        </div>
      </section>

      <section className={s.license}>
        <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024</p>
      </section>
    </footer>
  )
}
