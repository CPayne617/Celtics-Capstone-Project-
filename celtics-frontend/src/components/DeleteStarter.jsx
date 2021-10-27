import React, { Component } from 'react'
import StartersService from '../services/StartersService';

class DeleteStarter extends Component {
    constructor(props)
    {
    super(props)

    this.state = {
        id: this.props.match.params.id,
        lastname: '',
        position: ''
    }

    this.deleteStarter = this.deleteStarter.bind(this);

}//constructor

 componentDidMount()
 {
    StartersService.getStartersById(this.state.id).then((res) =>{
      let starter = res.data;
      this.setState({lastname:starter.lastname,
              position:starter.position
            });
    });
       
 }
 



deleteStarter = (e) => {
    e.preventDefault();
    let starter={
       id: this.state.id,
       lastname: this.state.lastname,
       position: this.state.position
    };

    console.log(starter)
    StartersService.deleteStarter(this.state.id).then(res => {
        
        this.props.history.push('/starters');
    })
  
    
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
                          <h3 className="text-center">Delete Starter</h3>
                          <div className="card-body">
                              <form>  
                                  <div className="form-group">
                                      <label>Starter ID: </label>
                                      <input placeholder="Id" readOnly="true" name="id" className="form-control"
                                         value={this.state.id} onChange={this.idHandler} />
                                   </div>   
                                   <div className="form-group">
                                      <label>Starter Last Name: </label>
                                      <input placeholder="Last Name" readOnly= "true" name="lastname" className="form-control"
                                         value={this.state.lastname} onChange={this.lastnameHandler} />
                                   </div>   
                                   <div className="form-group">
                                      <label>Starter Position: </label>
                                      <input placeholder="Position" readOnly="true" name="position" className="form-control"
                                         value={this.state.positionId} onChange={this.positionHandler} />
                                   </div>   
                                    <button className="btn btn-success" onClick={this.deleteStarter}> Delete </button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)}> Cancel </button>                    
                              </form>
                          </div>
                      </div>
                   </div>
               </div>
            </div>
        );
    }
}

export default DeleteStarter;