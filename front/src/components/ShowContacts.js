import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ShowContacts = () => {
    //the data for all contacts in the database are fetched and 
    //and contacts becomes a list of all the contacts in the database
    const [contacts, setContacts] = useState([])
    const getContacts = async () => {
        const response = await axios.get('http://localhost:8000/api/')
        setContacts(response.data)
    }
    useEffect(() => {
        getContacts();
    }, [])

    return (
        <div className="contacts-card-info">
            {
                //for every element in contacts, a card with the elementary information
                //of that element (a contact) is rendered
                contacts.map((contact) => (
                    <Card className="m-2 rounded shadow-lg" style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{contact.first_name} {contact.last_name}</Card.Title>
                            <Card.Text>
                                {"Mobile: " + contact.mobile_number} {" "}
                            </Card.Text>
                            <Link className="btn btn-primary m-2" to={`/${contact.id}/`}> Details </Link>
                        </Card.Body>
                    </Card>
                )
                )
            }


        </div>
    );

};

export default ShowContacts;