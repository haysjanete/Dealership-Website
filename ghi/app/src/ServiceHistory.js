import React from "react";

class ServiceHistory extends React.Component {
    state = {
        appointments: [],
        vin: "",
    };

    retrieveSalesHistory = async () => {
        const history_vin = this.state.vin;
        const historyUrl = "http://localhost:8080/api/appointments/history/"
        const fetchConfig = {
            method: "post",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({vin: history_vin})
        };
        const historyResponse = await fetch(historyUrl, fetchConfig);
        if (historyResponse.ok) {
            const data = await historyResponse.json();
            this.setState({appointments: data.appointments, vin: ""})
        }
    }

    handleVINChange = (event) => {
        const value = event.target.value;
        this.setState({ vin: value });
    };

    render = () => {
        return (
            <>
                <div className="input-group my-3">
                    <input value={this.state.vin} onChange={this.handleVINChange} type="search" className="form-control rounded" placeholder="Enter in your VIN" aria-label="Search" aria-describedby="search-addon" />
                    <button onClick={this.retrieveSalesHistory} type="button" className="btn btn-outline-primary">Search</button>
                </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>VIN</th>
                            <th>Customer name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Technician</th>
                            <th>Reason for service</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.appointments.map(appointment => {
                            return (
                                <tr key={appointment.id}>
                                    <td>{appointment.vin}</td>
                                    <td>{appointment.customer_name}</td>
                                    <td>{appointment.appointment_date}</td>
                                    <td>{appointment.appointment_time}</td>
                                    <td>{appointment.technician.first_name} {appointment.technician.last_name}</td>
                                    <td>{appointment.service_reason}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </>
        )
    };
}

export default ServiceHistory;
