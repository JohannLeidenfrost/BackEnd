import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { Link, useNavigate } from 'react-router-dom';
import Button from '@restart/ui/esm/Button';


const ContactDetail = () => {
    //returns the detailed data for the contact with id passed in the url
    const [contact, setContact] = useState("")
    //extracts a key/value pair from the url,
    //in this case the id passed in the url
    const { id } = useParams();


    //gets the data for the contact with the id requested in the url
    //from the API and sets contact to that value
    const getSingleContact = async () => {
        const { data } = await axios.get('http://localhost:8000/api/' + id + "/")
        console.log(data)
        setContact(data)
    }

    //the data for the contact is immediately extracted
    useEffect(() => { getSingleContact(); }, [])

    const history = useNavigate();


    return (
        <div>
            <h1>
                Contact Details
                <div>
                    {/* the details of the contact are displayed here */}
                    {contact.first_name} {contact.last_name}<br></br><br></br>
                    {"Mobile: " + contact.mobile_number} {" "}<br></br><br></br>
                    {"Home: " + contact.home_number} {" "}<br></br><br></br>
                    {"Work: " + contact.work_number} {" "}<br></br><br></br>
                    {"Email: " + contact.email_address}<br></br><br></br>
                    <Button variant="primary" onClick={() => {
                        //the data for that specific contact is deleted and 
                        //the user is redirected to the home page
                        const deleteContact = async (id) => {
                            await axios.delete(`http://localhost:8000/api/${id}/`)
                            history('/', { replace: true });
                        }
                        deleteContact(contact.id)
                    }}>Delete</Button>

                </div>
            </h1>
        </div>
    );

};

export default ContactDetail;