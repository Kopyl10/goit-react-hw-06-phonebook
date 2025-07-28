import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={css.item}>
          <span>
            {name}: {number}
          </span>
          <button className={css.button} onClick={() => onDelete(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
