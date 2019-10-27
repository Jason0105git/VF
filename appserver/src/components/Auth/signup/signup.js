import React, { Component } from "react";
import "./signup.css";
import Form from "react-bootstrap/Form";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
        showInputOtherRole:false,
        leftPanelOpacity:false,
        checked: false
    };
  }

  componentWillMount(){
    setTimeout(() => {
      this.setState({
        leftPanelOpacity:true
      })
    }, 2800);
  }

  handleCheckbox = () => {
    this.setState({checked: !this.state.checked});
  }

  render() {
    return (
      <div className="main-container bg">
          <div className={"pt-5 pr-5 contents "+(this.state.leftPanelOpacity ? 'left-panel-opacity':'')}>
          <div style={{width:'70vw'}} className="row justify-content-center align-items-start pt-5">
            <div className="col-xl-5 col-lg-6 pl-5 pr-5">

           <div>
              <Form className="signup-form">
                <h4>SIGN UP</h4>
                <Form.Group controlId="formBasicEmail">
                  <input
                    className="inp"
                    type="text"
                    placeholder="First Name"
                  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <input
                    className="inp"
                    type="text"
                    placeholder="Last Name"
                  />
                </Form.Group>
                
                <Form.Group controlId="formBasicEmail">
                  <input
                    className="inp"
                    type="text"
                    placeholder="Title/Role"
                  />
                </Form.Group>
                
               {this.state.showInputOtherRole ?  <Form.Group controlId="formBasicEmail">
                  <input
                    className="inp"
                    type="text"
                    placeholder="Other"
                  />
                </Form.Group> : null}
                <Form.Group controlId="formBasicEmail">
                  <input
                    className="inp"
                    type="text"
                    placeholder="Institution Name"
                    />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <input
                    className="inp"
                    type="email"
                    placeholder="Email"
                  />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                  <input
                    className="inp"
                    type="text"
                    placeholder="Username"
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <input
                    className="inp"
                    type="password"
                    placeholder="Password"
                    />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <input
                    className="inp"
                    type="password"
                    placeholder="Re-enter Password"
                    />
                </Form.Group>
              </Form>
            </div> 
          </div>
          <div className="col-xl-5 col-lg-6 signup-discription small mt-4">

           <div>
              <h6>Terms and conditions </h6>
              <p>
                Legal text goes here. Lorem ipsum dolor sit amet, dicat
                facilisis evertitur an quo, ius populo aperiam lucilius eu,
                sapientem maiestatis interpretaris nam in. Sint audire alterum
                quo id. Eam doctus invidunt definitionem cu, an ipsum consul
                tibique qui. Sint audire alterum quo id. Eam doctus invidunt
                definitionem cu, an ipsum consul tibique Legal text goes here.
                Lorem ipsum dolor sit amet, dicat facilisis evertitur an quo,
                ius populo aperiam lucilius eu, sapientem maiestatis
              </p>
              <p>
                interpretaris nam in. Sint audire alterum quo id. Eam doctus
                invidunt definitionem cu, an ipsum consul tibique qui. Sint
                audire alterum quo id. Eam doctus invidunt definitionem cu, an
                ipsum consul tibique Legal text goes here. Lorem ipsum dolor sit
                amet, dicat facilisis evertitur an quo, ius populo aperiam
                lucilius eu, sapientem maiestatis interpretaris nam in. Sint
              </p>
              <p>
                Legal text goes here. Lorem ipsum dolor sit amet, dicat
                facilisis evertitur an quo, ius populo aperiam lucilius eu,
                sapientem maiestatis interpretaris nam in. Sint audire alterum
                quo id. Eam doctus invidunt definitionem cu, an ipsum consul
                tibique qui. Sint audire alterum quo id. Eam doctus invidunt
                definitionem cu, an ipsum consul tibique Legal text goes here.
                Lorem ipsum dolor sit amet, dicat facilisis evertitur an quo,
                ius populo aperiam lucilius eu, sapientem maiestatis
              </p>
              <p>
                Legal text goes here. Lorem ipsum dolor sit amet, dicat
                facilisis evertitur an quo, ius populo aperiam lucilius eu,
                sapientem maiestatis interpretaris nam in. Sint audire alterum
                quo id. Eam doctus invidunt definitionem cu, an ipsum consul
                tibique qui. Sint audire alterum quo id. Eam doctus invidunt
                definitionem cu, an ipsum consul tibique Legal text goes here.
                Lorem ipsum dolor sit amet, dicat facilisis evertitur an quo,
                ius populo aperiam lucilius eu, sapientem maiestatis
              </p>
              <div className="btm-border text-left small">
                <input
                  type="checkbox"
                  id="signupCheck"
                  onChange={this.handleCheckbox}
                  defaultChecked={this.state.checked}
                />
                <label htmlFor="signupCheck">I accept Terms & Conditions above.
                </label>
              </div>
              {
                this.state.checked ?
                <div>
                  <button
                    className="mt-2 btn-style small login-button"
                    type="submit"
                  >
                    SIGN UP
                  </button>
                </div> : ""
              }
            </div>
          </div>
        </div>
        </div>
        
        <div data-animation='first'>
          <div style={{width:'30vw'}} className="d-flex align-items-center">
            <p className="mb-5 pb-5">
              <p className="border-left mt-3"></p>
              <p className="row ml-5 logo-container">
                <img
                  alt=""
                  src={require("../../../assets/logo-ge.svg")}
                  width="100"
                  height="100"
                  style={{ color: "white" }}
                  className="d-inline-block align-top img-fluid"
                />
                <h5 className="ml-3 logo-heading">GE Healthcare</h5>
              </p>

              <p className="mt-3 ml-5 login-adver">
                <p className="headline m-0">X-RAY AI</p>
                <span className="sub-headline m-0">EXPERIENCE</span>
              </p>
            </p>
          </div>

        </div>
        <div style={{
              color: "white",
              bottom: 65,
              right: 70,
              position:"absolute"
            }}>
          <img
            alt=""
            src={require("../../../assets/edison-logo.png")}
            width="120"
            height="60"
            className="img-fluid"
          />
        </div>
      </div>
    );
  }
}

export default Signup;