import React, { Component } from 'react'
import StartersService from '../services/StartersService'

export default class UpdateStarter extends Component {
    constructor(props)
    {
        super(props)
        
             this.state={
                 id: this.props.match.params.id,
                 lastname:'',
                 position:'',
                 firstname:''
             }
     
        this.idHandler = this.idHandler.bind(this);
        this.lastnameHandler = this.lastnameHandler.bind(this);
        this.firstnameHandler = this.firstnameHandler.bind(this);
        this.positionHandler = this.positionHandler.bind(this);
        this.updateStarter = this.updateStarter.bind(this);

    }//constructor

     componentDidMount()
     {
        StartersService.getStartersById(this.state.id).then((res) =>{
          let starter = res.data;
        //   console.log(starter)
          this.setState({lastname:starter.lastname,
                  position:starter.position, firstname:starter.firstname
                });
        });
           
     }
     
    idHandler=(event) => {
        this.setState({
             id: event.target.value});
    }

    lastnameHandler=(event) => {
        this.setState({
           lastname: event.target.value});
    }

   positionHandler=(event) => {
        this.setState({
             position: event.target.value});
    }
   firstnameHandler=(event) => {
        this.setState({
             firstname: event.target.value});
    }
//    nameHandler=(event) => {
//         this.setState({
//              name: event.target.value});
//     }
   jerseyHandler=(event) => {
        this.setState({
             jersey: event.target.value});
    }

   updateStarter = (e) => {
        e.preventDefault();
        let starter={
           id: this.state.id,
           lastname: this.state.lastname,
           position: this.state.position,
           firstname: this.state.firstname
        };
        
        StartersService.updateStarter(starter,this.state.id).then((res) => {
                this.props.history.push('/starters');
        });
      
        
    }

    cancel(){
        this.props.history.push('/starters');
    }
    
    render() {
        return (
            <div>
                <div className="container">
                   <div className="row">
                      <div className="card col-md-6 offset-md-3 offset-md-3">
                          <h3 className="text-center">Update Starter</h3>
                          <div className="card-body">
                              <form>  
                                  <div className="form-group">
                                      <label>Starter ID: </label>
                                      <input placeholder={this.state.id} readOnly="true" name="id" className="form-control"
                                         value={this.state.id} onChange={this.idHandler} />
                                   </div>   
                                   <div className="form-group">
                                      <label>Starter Last Name: </label>
                                      <input placeholder="Last Name" name="lastname" className="form-control"
                                         value={this.state.lastname} onChange={this.lastnameHandler} />
                                   </div>   
                                   <div className="form-group">
                                      <label>Starter Position: </label>
                                      <input placeholder="Position" name="position" className="form-control"
                                         value={this.state.position} onChange={this.positionHandler} />
                                   </div>   
                                   <div className="form-group">
                                      <label>Starter First Name: </label>
                                      <input placeholder="First Name" name="firstname" className="form-control"
                                         value={this.state.firstname} onChange={this.firstnameHandler} />
                                   </div>   
                                   {/* <div className="form-group">
                                      <label>Starter Name: </label>
                                      <input placeholder="Name" name="name" className="form-control"
                                         value={this.state.name} onChange={this.nameHandler} />
                                   </div>    */}
                                   <div className="form-group">
                                      <label>Starter Jersey: </label>
                                      <input placeholder="Jersey" name="jersey" className="form-control"
                                         value={this.state.jersey} onChange={this.jerseyHandler} />
                                   </div>   
                                    <button className="btn btn-success" onClick={this.updateStarter}> Update </button>
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
