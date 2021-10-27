import React, { Component } from 'react';
import StartersService from '../services/StartersService';

class ViewStarter extends Component {
    constructor(props)
    {
        super(props)

        this.state={
            id: this.props.match.params.id,
            starter:{}

        }

    } // constructor

    componentDidMount()
    {
       StartersService.getStartersById(this.state.id).then((res) =>{
           this.setState({starter:res.data})
        });
    }

    back(){
        this.props.history.push('/starters')
    }

    render() {
        return (
            <div>
                <div className="container">
                   <div className="row">
                      <div className="card col-md-6 offset-md-3 offset-md-3">
                          <h3 className="text-center">View Starter Details</h3>
                          <div className="card-body">
                              <form>  
                                  <div className="form-group">
                                    <label>Starter Id: </label>
                                    <input placeholder={this.state.starter.id} name="id" className="form-control" />
                                   </div>   
                                   <div className="form-group">
                                      <label>Starter Last Name: </label>
                                      <input placeholder={this.state.starter.lastname} readOnly={true} name="lastname" className="form-control" />
                                   </div>   
                                   <div className="form-group">
                                      <label>Starter First Name: </label>
                                      <input placeholder={this.state.starter.firstname} readOnly={true} name="firstname" className="form-control" />
                                   </div>   
                                   <div className="form-group">
                                      <label>Starter Position: </label>
                                      <input placeholder={this.state.starter.position} readOnly={true} name="Position" className="form-control" />
                                   </div> 
                                      <button className="btn btn-success" onClick={this.back.bind(this)}> Back </button>                               
                              </form>
                          </div>
                      </div>
                   </div>
               </div>
            </div>
        );
    }
}

export default ViewStarter;