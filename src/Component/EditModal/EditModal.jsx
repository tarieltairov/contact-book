import React from 'react';
import './EditModal.css'
const EditModal = ({setModal, contactsToEdit, setContactsToEdit, updateContacts }) => {
    function handleValues (e){
        let editedContacts={
            ...contactsToEdit,
            [e.target.name]:e.target.value
        }
        setContactsToEdit(editedContacts)
    }
    return (
            <div className="main-modal">
                <div className="inner-modal">
                    <h4>Edit data</h4>
                    <div>
                        <input  onChange={handleValues} value={contactsToEdit.name} type="text" className="inputs" placeholder="name" name="name"/>
                        <input  onChange={handleValues} value={contactsToEdit.phone} type="text" className="inputs" placeholder="Phone" name="phone"/>
                        <input  onChange={handleValues} value={contactsToEdit.image} type="text" className="inputs" placeholder="Image" name="image"/>
                    </div>
                    <button id="modal-btn" onClick={()=> updateContacts()}>Save</button>
                    <button id="close-modal" onClick={()=> setModal(false)}>Close</button>
                </div>
            </div>
    );
};

export default EditModal;