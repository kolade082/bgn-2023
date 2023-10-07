import React from 'react';


const Explore = () => {
    // assume we have an array of events with a "dateAdded" property
    const events = [
        { name: "Event 1", dateAdded: "2021-08-01", poster: require("../images/event1.jpeg"), location: "London", startingTime: "10:00 AM", description: "This is event 1" },
        { name: "Event 2", dateAdded: "2021-08-02", poster: require("../images/event2.jpeg"), location: "Birmingham", startingTime: "11:00 AM", description: "This is event 2" },
        { name: "Event 3", dateAdded: "2021-08-03", poster: require("../images/event3.jpeg"), location: "Manchester", startingTime: "12:00 PM", description: "This is event 3" },
        { name: "Event 4", dateAdded: "2021-08-04", poster: require("../images/event4.jpeg"), location: "Sheffield", startingTime: "1:00 PM", description: "This is event 4" },
        { name: "Event 5", dateAdded: "2021-08-05", poster: require("../images/event5.jpeg"), location: "Oxford", startingTime: "2:00 PM", description: "This is event 5" },
        { name: "Event 6", dateAdded: "2021-08-06", poster: require("../images/event1.jpeg"), location: "Cambridge", startingTime: "3:00 PM", description: "This is event 6" },
        { name: "Event 7", dateAdded: "2021-08-07", poster: require("../images/event7.jpeg"), location: "Southhampton", startingTime: "4:00 PM", description: "This is event 7" },
        { name: "Event 8", dateAdded: "2021-08-08", poster: require("../images/event9.jpeg"), location: "Nottingham", startingTime: "5:00 PM", description: "This is event 8" },
        { name: "Event 9", dateAdded: "2021-08-09", poster: require("../images/event8.jpeg"), location: "Bath", startingTime: "6:00 PM", description: "This is event 9" },
    ];

    // sort the events by dateAdded in descending order
    const sortedEvents = events.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));

    // get the 10 most recently added events
    const recentEvents = sortedEvents.slice(0, 10);

    // group the events into rows of 3
    const rows = [];
    for (let i = 0; i < recentEvents.length; i += 3) {
        rows.push(recentEvents.slice(i, i + 3));
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1>Explore Page</h1>
            <h2 style={{ textAlign: 'center' }}>Recently Added Events:</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                {recentEvents.map(event => (
                    <div key={event.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div className="event" style={{ position: 'relative' }}>
                            <img src={event.poster} alt={event.name} style={{ width: '300px', height: '300px', objectFit: 'cover' }} className='eventimg'  />

                            <span className='event-img__desc' style={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translateX(-50%)', backgroundColor: 'black', color: 'white', padding: '5px', borderRadius: '5px', transition: 'opacity 0.3s'}}>{event.description}</span>
                        </div>
                        <div style={{ textAlign: 'center', marginTop: '10px' }}>
                            <p style={{ fontWeight: 'bold' }}>{event.name}</p>
                            <p>{event.location}</p>
                            <p>{event.startingTime}</p>
                        </div>
                    </div>
                ))}
            </div>
            <script>{`
                const images = document.querySelectorAll('img');
                images.forEach(image => {
                    const tooltip = image.nextElementSibling;
                    image.addEventListener('mouseover', () => {
                        tooltip.style.opacity = '1';
                    });
                    image.addEventListener('mouseout', () => {
                        tooltip.style.opacity = '0';
                    });
                });`
            }</script>
        </div>
    );
};

export default Explore;
