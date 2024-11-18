import PropTypes from 'prop-types';
import { card } from './card.module.scss'

export const Card = ({ image, text }) => {
  return (
    <section className={card}>
      <img src={image} alt="Card image" />
      <p>{text}</p>
    </section>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
