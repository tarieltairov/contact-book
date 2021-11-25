import React from 'react';
import { Card, Button } from "react-bootstrap";
const ContactCard = ({item, deleteContacts, getContactsToEdit}) => {
    return (
        <div style={{border: 'solid gray 3px', textAlign: 'center', borderRadius: '5px'}}>
        <h3 style={{color: 'white'}}>Contacts list</h3>
        <Card className="m-2" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={item.image} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>{item.phone}</Card.Text>
          <Button variant="danger" className="m-1" onClick={()=>deleteContacts(item.id)}>
            Delete
          </Button>
          <Button variant="success" className="m-1" onClick={()=> getContactsToEdit(item)}>
            Edit
          </Button>
        </Card.Body>
      </Card>
      </div>
    );
};

export default ContactCard;