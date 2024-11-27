
import PropTypes from 'prop-types';
import { containerBook } from './listBook.module.scss';

export const ListBook = ({ image, name, autor, category }) => {
  return (
    <div className={containerBook}>
      <img src={image} />
      <h3>{name}</h3>
      <h4>{autor}</h4>
      <span>{category}</span>
    </div>
  )
}

ListBook.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  autor: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
