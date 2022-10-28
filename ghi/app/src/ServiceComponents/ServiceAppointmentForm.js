import React from 'react';

class ServiceAppointmentForm extends React.Component {
    state = {
        vin: '',
        customer_name: '',
        appointment_date: '',
        appointment_time: '',
        technician: '',
        technicians: [],
        service_reason: '',
    };

    componentDidMount = async () => {
        const technicianUrl = 'http://localhost:8080/api/technicians/';
        const response = await fetch(technicianUrl);
        if (response.ok) {
          const data = await response.json();
          this.setState({ technicians: data.technicians });
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const data = {...this.state};
        delete data.technicians;
        const appointmentUrl = 'http://localhost:8080/api/appointments/';
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const response = await fetch(appointmentUrl, fetchConfig);
        if (response.ok) {
            const newAppointment = await response.json();
            const cleared = {
                vin: '',
                customer_name: '',
                appointment_date: '',
                appointment_time: '',
                technician: '',
                service_reason: '',
            };
            this.setState(cleared);
        };
    };

    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({[name]: value});
    };

    render = () => {
        return (
        <div className="row">
            <div className="offset-3 col-6">
            <div className="shadow p-4 mt-4">
                <h1>Create a new service appointment</h1>
                <form onSubmit={this.handleSubmit} id="create-appointment-form">
                <div className="form-floating mb-3">
                    <input value={this.state.vin} onChange={this.handleChange} placeholder="VIN" required type="text" name="vin" id="vin" className="form-control" />
                    <label htmlFor="vin">VIN</label>
                </div>
                <div className="form-floating mb-3">
                    <input value={this.state.customer_name} onChange={this.handleChange} placeholder="Customer Name" required type="text" name="customer_name" id="customer_name" className="form-control" />
                    <label htmlFor="customer_name">Customer Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input value={this.state.appointment_date} onChange={this.handleChange} placeholder="Appointment Date" required type="date" name="appointment_date" id="appointment_date" className="form-control" />
                    <label htmlFor="appointment_date">Appointment Date</label>
                </div>
                <div className="form-floating mb-3">
                    <input value={this.state.appointment_time} onChange={this.handleChange} placeholder="Appointment Time" required type="time" min="09:00:00" max="17:00:00" name="appointment_time" id="appointment_time" className="form-control" />
                    <label htmlFor="appointment_time">Appointment Time</label>
                </div>
                <div className="mb-3">
                    <select onChange={this.handleChange} required name="technician" id="technician" className="form-select">
                    <option value="">Choose a technician</option>
                    {this.state.technicians.map(technician => {
                        return (
                        <option key={technician.employee_number} value={technician.employee_number}>{technician.first_name} {technician.last_name}</option>
                        )
                    })}
                    </select>
                </div>
                <div className="form-floating mb-3">
                    <input value={this.state.service_reason} onChange={this.handleChange} placeholder="Service Reason" required type="text" name="service_reason" id="service_reason" className="form-control" />
                    <label htmlFor="service_reason">Service Reason</label>
                </div>
                <button className="btn btn-primary">Reserve</button>
                </form>
            </div>
            </div>
        </div>
        );
    };
};

export default ServiceAppointmentForm;
