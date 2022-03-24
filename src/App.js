import { useState } from 'react';
import './App.css';
import AddContact from './components/addContact/AddContact';
import ContactList from './components/contactsList/ContactsList';
import EditContacts from './components/editContacts/EditContacts';

function App() {
  let [contacts, setContacts] = useState([]);
  let [editContact, setEditContact] = useState({});
  let [isEdit, setIsEdit] = useState(false);

  function handleNewContact(newContact) {
    let newContactsArray = [...contacts];
    newContactsArray.push(newContact);
    setContacts(newContactsArray);
  }

  function handleDelContact(id){
    // console.log(id);
    let newContactsArray = contacts.filter(item=> (item.id !== id))
    setContacts(newContactsArray);
  }

  function handleEditContact(id){
    setIsEdit(true)
    setEditContact(contacts[id])
  }
  function handleSaveEditedContact(newContact){
    let newContactsArray = contacts.map(item => {
      if(item.id === newContact.id){
      return newContact
      }
      return item
    })
    setContacts(newContactsArray)
    setIsEdit(false)
  }
  return (
    <div className="App">
      <div className="container">
      <AddContact
      handleNewContact={handleNewContact}
      />
      {isEdit ? <EditContacts
      editContact={editContact}
      handleSaveEditedContact={handleSaveEditedContact} />
      :null}
      <ContactList
      contacts={contacts}
      handleDelContact={handleDelContact}
      handleEditContact={handleEditContact}
      />
      </div>
    </div>
  );
}

export default App;
