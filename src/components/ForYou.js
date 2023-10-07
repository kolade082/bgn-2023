import React from 'react';
import Explore from './Explore';

function ForYou({ interests, hobbies }) {
    // Filter the data in Explore based on the user's interests and hobbies
    const filteredData = Explore.filter(item => interests.includes(item.interest) && hobbies.includes(item.hobby));

    return (
        <div>
            <h1>My Page</h1>
            <p>Welcome to my page!</p>
            {/* Render the filtered data */}
            {filteredData.map(item => (
                <div key={item.id}>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    );
}

export default ForYou;
