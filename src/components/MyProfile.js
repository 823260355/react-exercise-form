import React, {Component} from 'react';
import './myProfile.less';

class MyProfile extends Component {
  state = {
    name:"",
    gender:"",
    description:""
  };

  handleFielsChange = (field, event) =>{
    this.setState({
      [field]:event.target.value,
    });
  }
  render() {
    return (
      <div className="container">
           <h1 >My Profile</h1>
           <form className="my-form">
              <div className="form-group">
                 <label htmlFor="name">Name</label>
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
                  <label  htmlFor="gender">Gender</label>
                    <select className="form-control" id="gender">
                        <option defaultValue="defaultValue">Male</option>
                        <option>Female</option>
                    </select>
              </div>
              <div className="form-group">
                   <label htmlFor="decription">Decription</label>
                  <textarea className="form-control" id="decription" rows="3" placeholder="Decription about yourself"></textarea>
              </div>
              <div className="form-group form-check">
                   <input type="checkbox" className="form-check-input" id="read"/>
                   <label className="form-check-label" htmlFor="read">I have read the terms of conduct</label>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
             </form>
      </div> 
    );
  }
}

export default MyProfile;


