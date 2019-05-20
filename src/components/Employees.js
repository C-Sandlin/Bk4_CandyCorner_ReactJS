import React, { Component } from 'react';

export default class Employees extends Component {

    render() {
        return (
            <div className="employees">
                <h2>Employees:</h2>
                {
                    this.props.employees.map(employee =>
                        <div key={employee.id}>
                            <h4>{employee.employeeFirstName} {employee.employeeLastName}</h4>
                            <p>Employer: {employee.Company}</p>
                        </div>
                    )
                }

            </div>
        )
    }
}