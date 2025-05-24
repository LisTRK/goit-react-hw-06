import './App.css';
import 'modern-normalize';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import ContactsForm from '../ContactsForm/ContactsForm';

function App() {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactsForm />
      <SearchBox />
      <ContactList />
    </>
  );
}

export default App;
