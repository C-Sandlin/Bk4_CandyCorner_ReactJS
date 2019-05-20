import React, { Component } from 'react';

export default class Candies extends Component {

    render() {
        return (
            <div className="candies">
                <h2>Candies:</h2>
                {
                    this.props.candies.map(candy =>
                        <div key={candy.id}>
                            <h4>{candy.candyName}</h4>
                            <p>Candy Type: {this.props.candyTypes
                                .find(candyType => candyType.id === candy.candyType).isType}</p>
                        </div>
                    )
                }

            </div>
        )
    }
}