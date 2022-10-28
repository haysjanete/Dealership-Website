import React from 'react';

class ListAutomobiles extends React.Component {
    state = {
        automobiles: [ ]
    };


    componentDidMount = async() => {
        const url = 'http://localhost:8100/api/automobiles/';
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            this.setState({automobiles:data.autos});
        }
    }

    render = () => {
        return(
            <>
            <div className="container p-10 m-10">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>VIN</th>
                            <th>Color</th>
                            <th>Year</th>
                            <th>Model</th>
                            <th>manufacturer</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.automobiles.map((auto,idx) => {
                            return(
                                <tr key={idx}>
                                    <td>{auto.vin}</td>
                                    <td>{auto.color}</td>
                                    <td>{auto.year}</td>
                                    <td>{auto.model.name}</td>
                                    <td>{auto.model.manufacturer.name}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
            </>
        )
    }
}

export default ListAutomobiles;
