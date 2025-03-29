import PropTypes from 'prop-types';
import s from './card.module.scss';

export const Card = ({ image, alt, text }) => {
  return (
    <section className={s.card}>
      <img src={image} alt={alt} />
      <p>{text}</p>
    </section>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
