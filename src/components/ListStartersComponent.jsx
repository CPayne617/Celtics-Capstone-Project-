import React, { Component } from 'react'
import StartersService from '../services/StartersService'

export default class ListStartersComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            starter: []
        }
        this.addStarter = this.addStarter.bind(this);
        this.updateStarter = this.updateStarter.bind(this);
        this.deleteStarter = this.deleteStarter.bind(this);
        this.viewStarter = this.viewStarter.bind(this);
    }

    componentDidMount() {
        StartersService.getStarters().then((res) => {
            // console.log(res.data)
            this.setState({ starter: res.data });
        });
    }

    addStarter() {
        this.props.history.push('/addstarter');
        console.log(this.props.history)
    }

    updateStarter(id) {
        this.props.history.push(`/update-starter/${id}`);

    }

    deleteStarter(id) {
        this.props.history.push(`/delete-starter/${id}`);
        // StartersService.deleteStarter(id).then(res => {
        //     this.setState({
        //          starter: this.state.starters.filter(starter => starter.id !== id)
        //     })
        // })

    }

    viewStarter(id) {
        this.props.history.push(`/view-starter/${id}`);

    }

    render() {
        return (
            <div>
                <h2 className="text-center">Starters List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addStarter}> Add Starter </button>
                </div>
                <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th> Starters Jersey Id</th>
                                <th> Starters Position Id</th>
                                <th> Starters First Name</th>
                                <th> Starters Last Name</th>
                                <th> Actions</th>
                            </tr>

                        </thead>

                        <tbody>
                            {
                                this.state.starter.map(
                                    starter =>
                                        <tr key={starter.id}>
                                            <td> {starter.jersey} </td>
                                            <td> {starter.position} </td>
                                            <td> {starter.firstname} </td>
                                            <td> {starter.lastname} </td>
                                            <td>
                                                <button onClick={() => this.updateStarter(starter.id)} className="btn btn-primary">Update</button>
                                                <button onClick={() => this.deleteStarter(starter.id)} className="btn btn-danger">Delete</button>
                                                <button onClick={() => this.viewStarter(starter.id)} className="btn btn-primary">View</button>
                                            </td>
                                        </tr>

                                )
                            }

                        </tbody>
                    </table>

                </div>

            </div>
        )
    }
}

