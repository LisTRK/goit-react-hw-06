import { useDispatch, useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { deleteContact } from '../../redux/contactsSlice';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(
    (state) => state.contactDataReducer.contactsData,
  );

  const query = useSelector((state) => {
    return state.contactFilterReducer.searchQuery;
  });

  const visibleContact = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(query.toLowerCase()),
  );

  const onDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const renderContactsList = visibleContact.map((contact) => {
    return (
      <li key={contact.id} className={css.card}>
        <Contact contact={contact} onDeleteContact={onDeleteContact} />
      </li>
    );
  });

  return (
    <ul className={css.list}>
      {visibleContact.lenght !== 0
        ? renderContactsList
        : [<p className={css.empty}>Phonebook is empty</p>]}
    </ul>
  );
}
