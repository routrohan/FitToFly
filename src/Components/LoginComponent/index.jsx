import React from "react";
import ReactDOM from "react-dom";
import TestScreenController from '../testScreenController';


class LoginForm extends React.Component {

    constructor(props)
    {
        super(props);

        this.state={
            submit:false
        }

    }

    onSubmit()
    {
        this.setState({submit:true});
    }

  render() {
    return(

        <div>
        {
            (this.state.submit)?<TestScreenController />: <Container onSubmit={()=>this.onSubmit()} {...this.props} />
        }
        </div>
  )
  }
}

class Container extends React.Component {
    constructor(props)
    {
        super(props);
    }


  render() {
    const {onSubmit}=this.props;

    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <div className="card mx-auto">
              <div className="card-body">
                <h1
                  className="card-title"
                  style={{ borderBottom: "1px solid #efefef" }}
                >
                </h1>
                <Form  {...this.props}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }
  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  handleSubmit(event) {
    event.preventDefault(event);
  }
  clearForm() {
    this.setState({
      email: "",
      password: "",
      pnr:""
    });
  }
  render() {
    return (
        <div style={{border:"3px solid #072F5F",padding:"20px"}}>
        <div>
        <h1 style={{color:"#072F5F",fontSize:"2.5rem",textAlign:"center"}}>SIGN IN</h1>
        </div>
      <form
   
        className="needs-validation"
        noValidate
      >
        <div className="form-group">
          <label style={{color:"#1261A0"}} htmlFor="exampleInputEmail1">Email address</label>
          <input
          style={{border:"3px solid #1261A0"}}
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
            placeholder="Enter email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label  style={{color:"#1261A0"}} htmlFor="exampleInputPassword1">Password</label>
          <input
          style={{border:"3px solid #1261A0"}}

            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
            required
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
        <label style={{color:"#1261A0"}} htmlFor="exampleInputPassword1">PNR Number</label>
        <input
        style={{border:"3px solid #1261A0"}}
          type="text"
          name="pnr"
          className="form-control"
          id="exampleInputPassword1"
          required
          placeholder="PNR Number"
          value={this.state.pnr}
          onChange={this.handleChange}
        />
      </div>
      <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <button style={{width:"200px",backgroundColor:"#072F5F",color:"white",fontSize:"1.5rem",margin:"0 auto"}} onClick={()=>this.props.onSubmit()} type="submit" className="btn btn-primary">
          Submit
        </button>
        </div>
      </form>
      </div>
    );
  }
}


export default LoginForm;