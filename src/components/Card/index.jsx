import PropTypes from 'prop-types';
import s from '../../styles/modules/card.module.scss';

export const Card = ({ image, text }) => {
  return (
    <section className={s.card}>
      <img src={image} alt="Card image" />
      <p>{text}</p>
    </section>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
