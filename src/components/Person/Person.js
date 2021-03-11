import React, { useEffect, useState } from 'react';
import personData from '../../data/data.json'
import Friends from '../Friends/Friends';
import Info from '../Info/Info';
import './Person.css'
const Person = () => {
    const [person, setPerson] = useState([])
    const [friend, setFriend] = useState([])
    const handleAddFriend = (add) => {
        const newFriend = [...friend, add];
        setFriend(newFriend);
    }
    useEffect(()=>{
        setPerson(personData)
    },[])
    return (
        <div className="person-container">
            <div>
            {
                person.map(sPerson => <Info key={sPerson.id}  handleAddFriend={handleAddFriend} info={sPerson}></Info>)
            }
            </div>
            <div>
                <Friends friend={friend}></Friends>
            </div>
        </div>
    );
};

export default Person;