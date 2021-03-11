import React from 'react';
import './Info.css'

const Info = (props) => {
    const {name, img, location, email, salary, number} = props.info;
    
    return (
        <div className="info-container">
            <img src={img} alt=""/>
            <h2>{name}</h2>
            <p><small>Lives in {location}</small></p>
            <b><small>Email: {email}</small></b>
            <p><small>Salary: ${salary}</small></p>
            <p><small>Phone number: +1 {number}</small></p>
            <button>Add Friend</button>
            
        </div>
    );
};

export default Info;