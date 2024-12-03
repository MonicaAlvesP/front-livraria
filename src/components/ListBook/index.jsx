
import PropTypes from 'prop-types';
import s from '../../styles/modules/listBook.module.scss';

export const ListBook = ({ image, name, autor }) => {
  return (
    <div className={s.containerBook}>
      <img src={image} />
      <h3>{name}</h3>
      <h4>{autor}</h4>
    </div>
  )
}

ListBook.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  autor: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
