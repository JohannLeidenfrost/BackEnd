
import axios from 'axios';
import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AddContact = () => {
    //Adds a contact to the database and redirects back to the home page

    const [first_name, setFirstName] = useState("")
    const [last_name, setLastName] = useState("")
    const [mobile_number, setMobileNumber] = useState("")
    const [home_number, setHomeNumber] = useState("")
    const [work_number, setWorkNumber] = useState("")
    const [email_address, setEmailAddress] = useState("")
    //the state of every field that is entered into the input fields 
    //is kept track of and updated

    const history = useNavigate();
    //useNavigate returns the navigation prop of this component 

    const AddContactInfo = async () => {
        //the input data is input into formField as key-value pairs 
        let formField = new FormData();
        formField.append('first_name', first_name)
        formField.append('last_name', last_name)
        formField.append('mobile_number', mobile_number)
        formField.append('home_number', home_number)
        formField.append('work_number', work_number)
        formField.append('email_address', email_address)

        const url = 'http://localhost:8000/api/';
        //the data in formField is posted to the REST framework
        //history thenr replaces the current url with the one 
        //that leads to home screen
        axios.post(url, formField).then(response => {
            console.log(response.data);
            history('/', { replace: true });
        }).catch(({ response }) => {
            console.log(response);
        });
    }

    return (
        <div>
            <h1>Add contact</h1>
            <Container>
                {/*input fields for every field; using the set functions, the 
                value of each field is updated */}
                <div className="form-group">
                    <input type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Your First Name"
                        first_name="first_name"
                        value={first_name}
                        onChange={(e) => setFirstName(e.target.value)} />
                </div>


                <div className="form-group">
                    <input type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Your Last Name"
                        last_name="last_name"
                        value={last_name}
                        onChange={(e) => setLastName(e.target.value)} />
                </div>

                <div className="form-group">
                    <input type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Your Mobile Number"
                        mobile_number="mobile_number"
                        value={mobile_number}
                        onChange={(e) => setMobileNumber(e.target.value)} /></div>

                <div className="form-group">
                    <input type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Your Home Number"
                        home_number="home_number"
                        value={home_number}
                        onChange={(e) => setHomeNumber(e.target.value)} /></div>

                <div className="form-group">
                    <input type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Your Work Number"
                        work_number="work_number"
                        value={work_number}
                        onChange={(e) => setWorkNumber(e.target.value)} /></div>


                <div className="form-group">
                    <input type="text"
                        className="form-control form-control-lg"
                        placeholder="Enter Your Email Address"
                        email_address="email_address"
                        value={email_address}
                        onChange={(e) => setEmailAddress(e.target.value)} /></div>


                <Button onClick={AddContactInfo}>
                    Add Contact
                </Button>

            </Container>

        </div >
    );

};

export default AddContact;