import React, { useState } from 'react';
import "./addContact.css"

// комонент который принимает с инпута данные и добавляет через пропс в handleNewContact
const AddContact = (props) => {
    let [name,setName] = useState('');
    let [lastName, setLastName] = useState('');
    let [phone, setPhone] = useState('');

    function handleClick(){
        let newContact ={
            name,
            lastName,
            phone,
            id: Date.now()
        };
        props.handleNewContact(newContact)
        // console.log(newContact);
        setName('');
        setLastName('');
        setPhone('');
    }
// инпуты которые принимают имя фамилию и номер телефона
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
            type="number"
            placeholder="phone number"
            value={phone}
            />
            <button className="btn" onClick={handleClick}>Add contact</button>
        </div>
    );
};

export default AddContact;