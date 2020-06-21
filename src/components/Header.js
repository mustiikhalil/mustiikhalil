import React from 'react';

export default class Header extends React.Component {

    state = {
        built: "Built With Flatbuffers <3"
    }
    render() {
        return (
            <div className="Header">
                <div className="HeaderText">{this.state.built}</div>
            </div>
        )
    }
}