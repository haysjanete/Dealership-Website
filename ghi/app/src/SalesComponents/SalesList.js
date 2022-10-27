import React from 'react';


class SalesList extends React.Component {
    state = {
        sales: [ ]
    }

    componentDidMount = async () => {
        const url = ('http://localhost:8090/api/sales/');
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            this.setState({sales: data.sales});
        }
    }
    render () {
        return (
            <>
                <div className="container p-10 m-10">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Vin</th>
                                <th>Sales Person</th>
                                <th>Employee Number</th>
                                <th>Customer</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.sales.map(sale => {
                                return(
                                    <tr key={sale.vin}>
                                        <td>{sale.vin}</td>
                                        <td>{sale.sales_person.name}</td>
                                        <td>{sale.sales_person.employee_number}</td>
                                        <td>{sale.customer.name}</td>
                                        <td>{'$' + sale.price}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}

export default SalesList;