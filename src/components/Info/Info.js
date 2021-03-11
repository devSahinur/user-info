import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './Info.css'

const Info = (props) => {
    const {name, img, location, email, salary, number} = props.info;
    const handleAddFriend = props.handleAddFriend;

    return (
        <div className="info-container">
            <img src={img} alt=""/>
            <h2>{name}</h2>
            <p><small>Lives in {location}</small></p>
            <b><small>Email: {email}</small></b>
            <p><small>Salary: ${salary}</small></p>
            <p><small>Phone number: +1 {number}</small></p>
            <button onClick={() => handleAddFriend(props.info)}><FontAwesomeIcon icon={faUserPlus} /> Add Friend</button>
            
        </div>
    );
};

export default Info;