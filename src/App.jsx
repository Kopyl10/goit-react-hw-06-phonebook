import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts, deleteContact } from '../redux/contactsSlice';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList onDelete={handleDelete} />
    </div>
  );
};
