import React, {Component} from 'react';
import './myProfile.less';

class MyProfile extends Component {
  state = {
    name:"",
    gender:"",
    description:"",
    read: false
  };

  handleFielsChange = (field, event, checked=false) =>{
    this.setState({
      [field]:checked === false ? event.target.value : event.target.checked,
    });
  }

  formSubmit = (e) => {
    console.log(this.state);
  }
  render() {
    return (
      <div className="container">
           <h1 >My Profile</h1>
           <form className="my-form" id="myProfile">
              <div className="form-group">
                 <label htmlFor="name" style={{fontWeight: 'bold'}}>Name</label>
                 <input
                   type="text"
                   value={this.state.name}
                   onChange={(e) => this.handleFielsChange("name",e)}
                   className="form-control"
                   placeholder="Your name"
                   id="name"
                 />
              </div>
              <div className="form-group">
                  <label  htmlFor="gender" style={{fontWeight: 'bold'}}>Gender</label>
                    <select className="form-control" id="gender" onChange={(e) => this.handleFielsChange('gender', e)}>
                        <option defaultValue="defaultValue">Male</option>
                        <option>Female</option>
                    </select>
              </div>
              <div className="form-group">
                   <label htmlFor="decription" style={{fontWeight: 'bold'}}>Decription</label>
                  <textarea className="form-control" id="decription" rows="3" placeholder="Decription about yourself" onChange={(e) => this.handleFielsChange('description', e)}></textarea>
              </div>
              <div className="form-group form-check">
                   <input type="checkbox" className="form-check-input" id="read" onChange={(e) => this.handleFielsChange('read', e, true)}/>
                   <label className="form-check-label" htmlFor="read">I have read the terms of conduct</label>
              </div>
              <div className="form-group" style={{textAlign:'center'}}>
                   <button type="submit" className="btn btn-primary" disabled={
                        this.state.name === "" ||
                        this.state.gender === "" || 
                        this.state.description === "" || 
                        this.state.read === false} onClick={this.formSubmit()}>Submit</button>
              </div>       
             </form>
      </div> 
    );
  }
}

export default MyProfile;


