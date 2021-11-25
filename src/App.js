import React, { useState } from "react";

import './App.css';
import AddContact from './Component/AddContact/AddContact';
import ContactList from './Component/ContactList/ContactList';
import EditModal from './Component/EditModal/EditModal'
function App() {
  const [contacts, setContacts] = useState([])
  let [modal, setModal] = useState(false)
  const[contactsToEdit, setContactsToEdit]=useState(null)

  function getContactsToEdit(item){
    setModal(true)
    setContactsToEdit(item)
  }


  function updateContacts() {
    let arr = contacts.map((item) => {
      if(item.id !== contactsToEdit.id) {
        return item;
      }else {
        return contactsToEdit;
      }
    });
    setContacts(arr)
    setModal(false)
  }


  function deleteContacts(id){
    let filteredContacts = contacts.filter((item)=>item.id !==id)
    setContacts(filteredContacts)
  }

  function addContacts(contact){
    setContacts([...contacts, contact])
  }

  return (
    <div >
      <AddContact addContacts={addContacts}/>
      <ContactList contacts={contacts} deleteContacts={deleteContacts} getContactsToEdit={getContactsToEdit}/>

      {contactsToEdit? ( modal ? (<EditModal setModal={setModal} contactsToEdit={contactsToEdit} setContactsToEdit={setContactsToEdit} updateContacts={updateContacts}/>):(null)
      ):(null)
      }
    </div>
  );
}

export default App;
