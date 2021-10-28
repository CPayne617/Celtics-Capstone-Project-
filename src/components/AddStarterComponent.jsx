import React, { Component } from 'react'
import StartersService from '../services/StartersService';

export default class AddStarterComponent extends Component {
    constructor(props)
    {
        super(props)

        this.state = {
            jerseyId: '',
            positionId: '',
            firstName: '',
            lastName: ''


        }

        // this.idHandler = this.idHandler.bind(this);
        this.lastnameHandler = this.lastnameHandler.bind(this);
        this.firstnameHandler = this.firstnameHandler.bind(this);
        this.positionHandler = this.positionHandler.bind(this);
        this.jerseyHandler = this.jerseyHandler.bind(this);

    }//constructor

     
    idHandler=(event) => {
        this.setState({
             id: event.target.value});
    }


    firstnameHandler=(event) => {
        this.setState({
           firstname: event.target.value});
    }
    lastnameHandler=(event) => {
        this.setState({
           lastname: event.target.value});
    }

     
    positionHandler=(event) => {
        this.setState({
             position: event.target.value});
    }

    jerseyHandler=(event) => {
        this.setState({
             jersey: event.target.value});
    }

    saveStarter = (e) => {
        e.preventDefault();
        let starter={
           jersey: this.state.jersey,
           firstname: this.state.firstname,
           lastname: this.state.lastname,
           position: this.state.position
        };
        console.log("this is the starter" + starter);
        StartersService.createStarter(starter).then(res =>{
            console.log(res, "checking response")
                this.props.history.push('/starters');  
            }).catch(err=>{
                console.log(err)
                console.log("record not saved.");
            });
       
       
        
        
    }//closing save method

    cancel(){
        this.props.history.push('/starters');
    }
    render() {
        return (
            <div>
                    <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Add Starter</h3>
                                <div className= "card-body">
                                    <form>
                                    
                                    <div className="form-group">
                                      <label> Starter First Name: </label>
                                      <input placeholder="FirstName" name="firstname" className="form-control"
                                         value={this.state.firstname} onChange={this.firstnameHandler} />
                                    </div> 
                                   <div className="form-group">
                                      <label>Starter Last Name: </label>
                                      <input placeholder="LastName" name="lastname" className="form-control"
                                         value={this.state.lastname} onChange={this.lastnameHandler} />
                                   </div>   
                                   <div className="form-group">
                                      <label>Starter Position: </label>
                                      <input placeholder="Position" name="position" className="form-control"
                                         value={this.state.position} onChange={this.positionHandler} />
                                   </div>   
                                   <div className="form-group">
                                      <label>Starter Jersey: </label>
                                      <input placeholder="Jersey" name="jersey" className="form-control"
                                         value={this.state.jersey} onChange={this.jerseyHandler} />
                                   </div>   
                                    <button className="btn btn-success" onClick={this.saveStarter}> Save </button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)}> Cancel </button>

                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
            </div>
        )
    }
}
