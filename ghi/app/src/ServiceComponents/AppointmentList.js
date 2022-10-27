import React from "react";

class AppointmentList extends React.Component {
    state = {
        appointments: [],
    };

    componentDidMount = async () => {
        const appointmentUrl = 'http://localhost:8080/api/appointments/';
        const response = await fetch(appointmentUrl);

        if (response.ok) {
            const data = await response.json();
            this.setState({appointments: data.appointments.filter(appointment => appointment.service_status === "Submitted")});
        }
    };

    handleServiceStatusChange = async (event, new_status) => {
        const id = event.target.value;
        const appointmentUrl = `http://localhost:8080/api/appointments/${id}/`;
        const fetchConfig = {
            method: "put",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({service_status: new_status})
        };
        const appointmentResponse = await fetch(appointmentUrl, fetchConfig);
        if (appointmentResponse.ok) {
            this.setState({appointments: this.state.appointments.filter(appointment => appointment.id != id)})
        }
    }

    render = () => {
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>VIN</th>
                        <th>Customer name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Technician</th>
                        <th>Reason for service</th>
                        <th>VIP Treatment</th>
                        <th></th>
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
                                <td>{appointment.vip_status ? ("Yes") : ("No")}</td>
                                <td>
                                    <button type="button" className="btn btn-danger" onClick={(event) => this.handleServiceStatusChange(event, "Cancelled")} value={appointment.id}>Cancel</button>
                                    <button type="button" className="btn btn-success" onClick={(event) => this.handleServiceStatusChange(event, "Finished")} value={appointment.id}>Finished</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        )
    };
}

export default AppointmentList;
