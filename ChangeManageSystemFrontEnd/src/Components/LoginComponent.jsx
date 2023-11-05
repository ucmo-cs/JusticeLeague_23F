import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';
import {Formik, Field, ErrorMessage} from 'formik';
import ChangeRequestDataService from '../Service/ChangeRequestDataService';

class LoginComponent extends Component {
    constructor(props) {
      super(props)
      this.state = {
        userId:'',
        password:'',
      }
      this.changeValue = this.changeValue.bind(this);
      this.requestUser = this.requestUser.bind(this);
    };
    changeValue=(e)=>{
      console.log(e.target.name);
      const nameValue = e.target.name;
      const value = JSON.stringify(e.target.value);
      this[nameValue] = value;
      console.log(this.userId);
      console.log(this.password);
    }
    requestUser=(e)=>{
      e.preventDefault();
      fetch(`http://localhost:8080/users/${this.userId}`)
      .then(data=> {
        return data.json();
      })
      .then(post => {
        console.log(post.userId);
        console.log(post.password);
        if (post.userId == this.userId) {
          if (post.password == this.password) {
              document.cookie = "userId=" + this.userID;
              console.log(document.cookie);
          } else {
          // Error for incorrect password. Change the Div Tag to shown for the incorrect Password field here.
          this.setState({ incorrectPassword: true, incorrectUserId: false });
          // Logging for debugging below.
          console.log("Incorrect Password");
          console.log(this.password);
          }
        } else {
          // Error for incorrect userID. Change the div tag to shown for the incorrect userID field here.
          this.setState({ incorrectUserId: true, incorrectPassword: false });
          // Logging for debugging below.
          console.log("Incorrect userId");
          console.log(this.userID);
        }
      })
      .catch(error => {
        console.error(error);
        this.setState({ incorrectUserId: true, incorrectPassword: false });
    });
    }
    render() {
        return (
                    <Form onSubmit={this.requestUser}>
                      
                        <div id="u6" class="ax_default text_field" data-label="Input Field">
                          <div id="u6_div" class=""></div>
                          <input id="u6_input" type="text" class="u6_input" onChange = {this.changeValue} name="userId"/>
                        </div>
                        {this.state.incorrectUserId && (
                    <div className="error-message">Incorrect userId</div>
                        )}
                        <div id="u8" class="ax_default shape" data-label="Lower Label">
                        <div id="u8_div" class=""></div>
                        <div id="u8_text" class="text ">
                          <p><span>UserID</span></p>
                          </div>
                        </div>

                        <div id="u10" class="ax_default text_field" data-label="Input Field">
                          <div id="u10_div" class=""></div>
                          <input id="u10_input" type="text" class="u10_input" onChange = {this.changeValue} name="password"/>
                        </div>
                        {this.state.incorrectPassword && (
                    <div className="error-message">Incorrect Password</div>
                        )}
                        <div id="u12" class="ax_default shape" data-label="Lower Label">
                        <div id="u12_div" class=""></div>
                        <div id="u12_text" class="text ">
                            <p><span>Password</span></p>
                          </div>
                        </div>
                      
                      <button id="u13" class="ax_default primary_button" style={{cursor: 'pointer'}} type="submit"> 
                      <div id="u13_div" class=""></div>
                      <div id="u13_text" class="text ">
                        <p><span>Log In</span></p>
                        </div>
                      </button>
                    </Form>
    );
  }
}

export default LoginComponent;