import React from 'react';
import "./ContactList.css"

const ContactList = (props) => {
    // console.log(props);
    return (
        <div>
            {props.contacts.map((item, index)=>(
                <ul className="ul" key={item.id}>
                    <li className="li">{item.name}</li>
                    <li className="li">{item.lastName}</li>
                    <li className="li">{item.phone}</li>
                    <li className="li">
                        <button className="btn" onClick={()=>{props.handleDelContact(item.id)}}>Del</button>
                        <button className="btn" onClick={()=>{props.handleEditContact(index)}}>Edit</button>
                    </li>

                </ul>
            ))}
        </div>
    );
};

export default ContactList;