import React from 'react';

class SalesPersonRecord extends React.Component {
    state = {
            all_employees: [ ],
            employee_name: [ ],
            current_employee_sales: null,
        };

    componentDidMount = async () => {
        const url = ('http://localhost:8090/api/sales-person/');
        const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                this.setState({all_employee: data.sales_person})
            }
    }

    handleSalesPersonChange = (event) => {
        const value = event.target.value;
        this.setState({employee_number: value})
        this.fetchCurrentEmployeeSales(value)
    }

    fetchCurrentEmployeeSales = async (id) => {
        const employeeUrl = `http://localhost:8090/api/sales/${id}/`;
        const employeeResponse = await fetch (employeeUrl);
            if (employeeResponse.ok) {
                const employeeData = await employeeResponse.json();
                this.setState({current_employee_sales: employeeData})
            }
    }


    render () {
        return (
            <>
            <div className='container'>
                <h1>Sales Person History</h1>
                <div>
                <select onChange={this.handleSalesPersonChange} required named="all_employees" id="all_employees" className="form-select">
                    <option value="">Choose a Sales Person</option>
                    {this.state.all_employees.map(sales_person => {
                        return  (
                            <option key={sales_person.id} value={sales_person.id}>
                                {sales_person.name}
                            </option>
                        );
                    })}
                </select>
                </div>
            </div>
            <div className='container'>
                <table className='table table striped'>
                    <thead>
                        <tr>
                            <th>Sales Person</th>
                            <th>Customer</th>
                            <th>Vin</th>
                            <th>Sale Price</th>
                        </tr>
                    </thead>
                    {
                        this.state.current_employee_sales ?
                        <tbody>
                            {this.state.current_employee_sales.map((sale, idx) => {
                                return (
                                    <tr key={idx}>
                                        <td>{sale.sales_person.name}</td>
                                        <td>{sale.customer.name}</td>
                                        <td>{sale.vin}</td>
                                        <td>{'$' + sale.price}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                        :
                        null
//////was expecting a ":" but didn't have one so I "nulled" it out.///////
                    }
                </table>
            </div>
            </>
        )
    }
}


export default SalesPersonRecord;