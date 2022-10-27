import React from 'react';

class TechnicianForm extends React.Component {
    state = {
        first_name: '',
        last_name: '',
        employee_number: '',
        employee_photo: '',
    };

  handleSubmit = async (event) => {
    event.preventDefault();
    const data = {...this.state};

    const locationUrl = 'http://localhost:8080/api/technicians/';
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const response = await fetch(locationUrl, fetchConfig);
    if (response.ok) {
      const newTechnician = await response.json();
      console.log(newTechnician);
      const cleared = {
        first_name: '',
        last_name: '',
        employee_number: '',
        employee_photo: '',
      };
      this.setState(cleared);
    };
  };

  handleFirstNameChange = (event) => {
    const value = event.target.value;
    this.setState({ first_name: value });
  };

  handleLastNameChange = (event) => {
    const value = event.target.value;
    this.setState({ last_name: value });
  };

  handleEmployeeNumberChange = (event) => {
    const value = event.target.value;
    this.setState({ employee_number: value });
  };

  handleEmployeePhotoChange = (event) => {
    const value = event.target.value;
    this.setState({ employee_photo: value });
  };

  render = () => {
    return (
      <div className="row">
        <div className="offset-3 col-6">
          <div className="shadow p-4 mt-4">
            <h1>Create a new technician</h1>
            <form onSubmit={this.handleSubmit} id="create-technician-form">
              <div className="form-floating mb-3">
                <input value={this.state.first_name} onChange={this.handleFirstNameChange} placeholder="First Name" required type="text" name="first_name" id="first_name" className="form-control" />
                <label htmlFor="first_name">First Name</label>
              </div>
              <div className="form-floating mb-3">
                <input value={this.state.last_name} onChange={this.handleLastNameChange} placeholder="Last Name" required type="text" name="last_name" id="last_name" className="form-control" />
                <label htmlFor="last_name">Last Name</label>
              </div>
              <div className="form-floating mb-3">
                <input value={this.state.employee_number} onChange={this.handleEmployeeNumberChange} placeholder="Employee Number" required type="number" name="employee_number" id="employee_number" className="form-control" />
                <label htmlFor="employee_number">Employee Number</label>
              </div>
              <div className="form-floating mb-3">
                <input value={this.state.employee_photo} onChange={this.handleEmployeePhotoChange} placeholder="Employee Photo" required type="text" name="employee_photo" id="employee_photo" className="form-control" />
                <label htmlFor="employee_photo">Paste in your employee photo URL</label>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
    );
  };
};

export default TechnicianForm;
