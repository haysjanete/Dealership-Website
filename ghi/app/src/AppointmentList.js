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
            this.setState({appointments: data.appointments});
        }
    };

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
                                <td>{appointment.technician}</td>
                                <td>{appointment.service_reason}</td>
                                <td>
                                    <button>Cancel</button>
                                    <button>Finished</button>
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
