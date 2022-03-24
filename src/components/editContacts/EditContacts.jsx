import React, { useState } from 'react';

const EditContacts = (props) => {
    let [name,setName] = useState(props.editContact.name);
    let [lastName, setLastName] = useState(props.editContact.lastName);
    let [phone, setPhone] = useState(props.editContact.phone);
    function handleSaveClick(){
        let contact = {...props.editContact};
        contact.name = name
        contact.lastName = lastName
        contact.phone = phone

        props.handleSaveEditedContact(contact)
        setName('');
        setLastName('');
        setPhone('');
    }
    return (
    <div>
        <input
        className="inp"
        onChange={(e)=>setName(e.target.value)}
        type="text"
        placeholder="name"
        value={name}
        />
        <input
        className="inp"
        onChange={(e)=>setLastName(e.target.value)}
        type="text"
        placeholder="last name"
        value={lastName}
        />
        <input
        className="inp"
        onChange={(e)=>setPhone(e.target.value)}
        type="text"
        placeholder="phone number"
        value={phone}
        />
        <button className="btn" onClick={handleSaveClick}>save</button>
    </div>
    );
};

export default EditContacts;