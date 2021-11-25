import React, { useState } from 'react';

const AddContact = ({addContacts}) => {
    const [newContact, setNewContact] = useState({
        name: "",
        phone: "",
        image: ""
    })

    function handleValues (e){
        let contacts = {
            ...newContact,
            [e.target.name]: e.target.value
        }
        setNewContact(contacts)
      }

    function chekValues(){
        if(!newContact.name || !newContact.phone || !newContact.image){
          alert('enter data')
          return
        }
        setNewContact({
            name: "",
            phone: "",
            image: ""
        })
        addContacts({...newContact, id: Date.now()})
      }
    

    return (
        <div className="d-flex flex-column m-3 mt-3 mb-3">
                <h3 style={{color: 'white'}}>Add new contact</h3>
                <input className="col-3 mb-1" type="text" name="name" value={newContact.name} onChange={handleValues} placeholder="enter name"/>
                <input className="col-3 mb-1" type="number" name="phone" value={newContact.phone} onChange={handleValues} placeholder="enter phone"/>
                <input className="col-3 mb-1" type="text" name="image" value={newContact.image} onChange={handleValues} placeholder="image"/>
                <button className="btn btn-success col-3" onClick={() => chekValues()} >Submit</button>

        </div>
    );
};

export default AddContact;