import { useSelector } from 'react-redux';

const ContactList = ({ onDelete }) => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredContacts.map(({ id, name, phone }) => (
        <li key={id}>
          {name}: {phone}
          <button onClick={() => onDelete(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
