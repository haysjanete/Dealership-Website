import React from "react";

class ServiceHistory extends React.Component {
    state = {
        appointments: [],
        vin: "",
    };

    // componentDidMount = async () => {
    //     const appointmentUrl = 'http://localhost:8080/api/appointments/';
    //     const response = await fetch(appointmentUrl);

    //     if (response.ok) {
    //         const data = await response.json();
    //         this.setState({appointments: data.appointments.filter(appointment => appointment.service_status === "Submitted")});
    //     }
    // };
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
        console.log(historyResponse)
        if (historyResponse.ok) {
            const data = await historyResponse.json();
            console.log(data)
            console.log(...data.appointments)
            this.setState({appointments: data.appointments, vin: ""})
            console.log(this.state)
        }
    }

    handleVINChange = (event) => {
        const value = event.target.value;
        this.setState({ vin: value });
    };

    // handleServiceStatusChange = async (event, new_status) => {
    //     const id = event.target.value;
    //     const appointmentUrl = `http://localhost:8080/api/appointments/${id}/`;
    //     const fetchConfig = {
    //         method: "put",
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({service_status: new_status})
    //     };
    //     const appointmentResponse = await fetch(appointmentUrl, fetchConfig);
    //     if (appointmentResponse.ok) {
    //         this.setState({appointments: this.state.appointments.filter(appointment => appointment.id != id)})
    //     }
    // }

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
