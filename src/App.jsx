import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from './redux/contactsSlice';
import ContactForm from './components/ContactForm/ContactForm';
import Filter from './components/Filter/Filter';
import ContactList from './components/ContactList/ContactList';

export const App = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div style={{ padding: 40 }}>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList
        contacts={filteredContacts}
        onDelete={id => dispatch(deleteContact(id))}
      />
    </div>
  );
};
