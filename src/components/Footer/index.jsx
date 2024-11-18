import { } from 'react-icons';
import { socialIcons, icons, license } from './footer.module.scss';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer>
      <section className={socialIcons}>
        <p>4002 - 8922</p>
        <section className={icons}>
          <a href=""><FaFacebook /></a>
          <a href=""><FaTwitter /></a>
          <a href=""><FaYoutube /></a>
          <a href=""><FaLinkedin /></a>
          <a href=""><FaInstagram /></a>
        </section>
      </section>

      <section className={license}>
        <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024</p>
      </section>
    </footer>
  )
}
