import React, { useState } from "react";
import "../styles/EventCreationForm.css";

const EventCreationForm = () => {

  const [formData, setFormData] = useState({
    societyName: "",
    eventName: "",
    eventDescription: "",
    eventDate: "",
    eventLocation: "",
    eventAudience: "",
    eventType: "",
    eventImage: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Submit the form data to the server here
  };

  return (
    
    <div class="form-container">
      <h1>Event Creation Form(Societies)</h1>
      <form onSubmit={handleSubmit}>
        <ul>
          <li><label class="form-label">Society Name
           <input
                type="text"
                name="eventName"
                value={formData.societyName}
                onChange={handleChange}
              />
            </label>
          </li>
          <li>
            <label class="form-label">Event Name
              <input
                type="text"
                name="eventName"
                value={formData.eventName}
                onChange={handleChange}
              />
            </label>
          </li>
          <li>
            <label class="form-label">Event Description
              <input
                type="text"
                name="eventDescription"
                value={formData.eventDescription}
                onChange={handleChange}
              />
            </label>
          </li>

          <li>
            <label class="form-label">Event Date
              <input
                type="date"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
              />
            </label>
          </li>

          <li>
            <label class="form-label">Event Location
             <input type="text" name="eventLocation" value={formData.eventLocation} onChange={handleChange} />
            </label>
          </li>
          <li>
            <label class="form-label">Event Audience</label>
            <datalist id="event-audience">
              <option value="OP 1" />
              <option value="OP 2" />
              <option value="OP 3" />
              <option value="OP 4" />
              <option value="OP 5" />
            </datalist>
            <input type="text" list="event-audience"></input>
          </li>
          <li>
            <label class="form-label">Event Type</label>
            <datalist id="event-type">
              <option value="OP 1" />
              <option value="OP 2" />
              <option value="OP 3" />
              <option value="OP 4" />
              <option value="OP 5" />
            </datalist>
            <input type="text" list="event-type"></input>
          </li>
          <li>
            <label class="form-label">Event Poster</label>
            <input type="file" id="event-image" name="event-image" accept="image/png, image/jpeg"></input>
          </li>
        </ul>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default EventCreationForm;

