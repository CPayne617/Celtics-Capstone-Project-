import React, { Component } from 'react';

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    render() {
        return (
            <div>
                <header>
                    <nav className="header">
                    <div className="navbar-brand">Starting Lineup </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;