
import PropTypes from 'prop-types';
import s from 'style/modules/listBook.module.scss';

export const ListBook = ({ image, alt, name, autor }) => {
  return (
    <div className={s.containerBook}>
      <img src={image} alt={alt} />
      <h3>{name}</h3>
      <h4>{autor}</h4>
    </div>
  )
}

ListBook.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  autor: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
