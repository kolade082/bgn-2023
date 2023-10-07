import React, { useState } from "react";
import "../styles/EventCreationForm.css";

const StudentActivityCreationForm = () => {

  const [formData, setFormData] = useState({
    activityName: "",
    activityDescription: "",
    activityDate: "",
    activityLocation: "",
    activityAudience: "",
    activityType: "",
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
      <h1>Activity Alert Form</h1>
      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            <label class="form-label">Activity Name
              <input
                type="text"
                name="activityName"
                value={formData.activityName}
                onChange={handleChange}
              />
            </label>
          </li>
          <li>
            <label class="form-label">Activity Description
              <input
                type="text"
                name="activityDescription"
                value={formData.activityDescription}
                onChange={handleChange}
              />
            </label>
          </li>

          <li>
            <label class="form-label">Activity Date
              <input
                type="date"
                name="activityDate"
                value={formData.activityDate}
                onChange={handleChange}
              />
            </label>
          </li>

          <li>
            <label class="form-label">Activity Location</label>
            <input type="text" list="activity-location"/>
          </li>
          <li>
            <label class="form-label">Who do you want at your event?</label>
            <datalist id="activity-audience">
              <option value="OP 1" />
              <option value="OP 2" />
              <option value="OP 3" />
              <option value="OP 4" />
              <option value="OP 5" />
            </datalist>
            <input type="text" list="activity-audience"></input>
          </li>
          <li>
            <label class="form-label">What type of activity is it?</label>
            <datalist id="activity-type">
              <option value="OP 1" />
              <option value="OP 2" />
              <option value="OP 3" />
              <option value="OP 4" />
              <option value="OP 5" />
            </datalist>
            <input type="text" list="activity-type"></input>
          </li>
        </ul>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default StudentActivityCreationForm;
