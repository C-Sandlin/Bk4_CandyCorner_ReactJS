import React, { Component } from 'react';

export default class Stores extends Component {
    render() {
        return (
            <div className="stores">
                <h2>Candy Stores:</h2>
                {
                    this.props.stores.map(store =>
                        <div key={store.id}>
                            <h4>{store.companyName}: {store.storeName}</h4>
                        </div>
                    )
                }

            </div>
        )
    }
}