import React from 'react';
import ContactCard from '../ContactCard/ContactCard';

const ContactList = ({contacts, deleteContacts, getContactsToEdit}) => {
    return (
        <div className="d-flex flex-wrap justify-content-center">
            {contacts.map(item=>{
                return <ContactCard item={item} deleteContacts={deleteContacts} getContactsToEdit={getContactsToEdit}/>
            })}
        </div>
    );
};

export default ContactList;