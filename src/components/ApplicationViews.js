import { Route } from 'react-router-dom';
import React, { Component } from "react";
import Candies from './Candies';
import Stores from './Stores';
import Employees from './Employees';
import { data } from "./data";


class ApplicationViews extends Component {

    state = {
        stores: data[0].storeData,
        employees: data[0].employeeData,
        candyTypes: data[0].candyTypesData,
        candies: data[0].candyData
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <Stores stores={this.state.stores} />
                }} />
                <Route path="/candies" render={(props) => {
                    return <Candies candies={this.state.candies} candyTypes={this.state.candyTypes} />
                }} />
                <Route path="/employees" render={(props) => {
                    return <Employees employees={this.state.employees} />
                }} />
            </React.Fragment>
        )
    }
}

export default ApplicationViews

