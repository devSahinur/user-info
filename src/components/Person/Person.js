import React, { useEffect, useState } from 'react';
import personData from '../../data/data.json'
import Info from '../Info/Info';
const Person = () => {
    const [person, setPerson] = useState([])
    useEffect(()=>{
        setPerson(personData)
        console.log(personData);
    },[])
    return (
        <div>
            {
                person.map(sPerson => <Info info={sPerson}></Info>)
            }
        </div>
    );
};

export default Person;