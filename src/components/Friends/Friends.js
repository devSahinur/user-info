import React from 'react';

const Friends = (props) => {
    const friend = props.friend;
    let totalSalary = 0;
    for (let i = 0; i < friend.length; i++) {
        const info = friend[i];
        totalSalary = totalSalary + info.salary;
    }

    console.log(totalSalary);
    return (
        <div>
            <h1>Total Friends: {friend.length}</h1>
            <h1>Total Salary: ${totalSalary}</h1>
        </div>
    );
};

export default Friends;