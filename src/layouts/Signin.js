import React from "react";

class Signin extends React.Component{
    constructor(props) {
        super(props);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.signIn = this.signIn.bind(this);
        this.state = {
          email:'',
          password:''
        }
    }

    
    handleEmailChange(e){
        this.setState({email:e.target.value})
    }
    handlePasswordChange(e){
        this.setState({password:e.target.value})
    }
    signIn(){
        let user_name = req.body.email;
        let password = req.body.password;
        app.post('/signin', function (req, res) {
            var user_name=req.body.email;
            var password=req.body.password;
            if(user_name=='admin' && password=='admin'){
                res.send('success');
            }
            else{
              res.send('Failure');
            }
          })       
    }


    render() {
        return(
            <div>
            <form className="form-signin">
            <h2 className="form-signin-heading"> Please sign in </h2>
            <label for="inputEmail" className="sr-only">Email address</label>
            <input type="email" onChange={this.handleEmailChange} id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
            <label for="inputPassword" className="sr-only">Password</label>
            <input type="password" onChange={this.handlePasswordChange} id="inputPassword" className="form-control" placeholder="Password" required />
            <button className="btn btn-lg btn-primary btn-block" onClick={this.signIn} type="button">Sign in</button>
            </form>
            </div>
            );
        }
    }

    export default Signin;