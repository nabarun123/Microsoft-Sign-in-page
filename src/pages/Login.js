import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  const [showSignup, setShowSignup] = useState(false);
  const [message, setMessage] = useState("");

  const toggleSignup = () => {
    setShowSignup(!showSignup);
  };

  const signupFn = (e) => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    const data = {
      name: name,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    };
    console.log(data);
    e.preventDefault();
    if (name != "" && email != "" && password != "" && confirmPassword != "") {
      setMessage("Sign up is Successful!");
    } else {
      setMessage("Sign up is Unsuccessful!");
    }
  };

  const signinFn = (e) => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const data = {
      email: email,
      password: password,
    };
    console.log(data);
    e.preventDefault();
    if (email != "" && password != "") {
      setMessage("Sign up is Successful!");
    } else {
      setMessage("Sign up is Unsuccessful!");
    }
  };

  return (
    <div>
      <div className="bg-light d-flex justify-content-center align-items-center vh-100">
        <div className="card m-5 p-5">
          <div className="row">
            <div className="col">
              <div>
                <img src="https://logincdn.msauth.net/shared/1.0/content/images/microsoft_logo_ee5c8d9fb6248c938fd0dc19370e90bd.svg" />
              </div>
              <br />
              {!showSignup ? (
                <div className="login">
                  <h3 className="pb-3 text-dark">Sign in</h3>
                  <form>
                    <div className="input-group m-1">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        id="email"
                      />
                    </div>
                    <div className="input-group m-1">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        id="password"
                      />
                    </div>

                    <input
                      type="submit"
                      className="form-control btn btn-primary mt-3 "
                      value="Sign in"
                      onClick={signinFn}
                    />

                    <div
                      className="text-center text-danger"
                      onClick={toggleSignup}
                    >
                      No Account? Create one!
                    </div>
                    <br />
                    <h5 className="text-center">{message}</h5>
                  </form>
                </div>
              ) : (
                <div className="signup">
                  <h3 className="pb-3 text-dark">Create Account</h3>
                  <form>
                    <div className="input-group m-1">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        id="name"
                      />
                    </div>
                    <div className="input-group m-1">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                        id="email"
                      />
                    </div>

                    <div className="input-group m-1">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        id="password"
                      />
                    </div>
                    <div className="input-group m-1">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Confirm Password"
                        id="confirmPassword"
                      />
                    </div>

                    <div className="input-group m-1 mt-4">
                      <input
                        type="submit"
                        className="form-control btn btn-primary"
                        value="Sign up"
                        onClick={signupFn}
                      />
                    </div>
                    <div
                      className="text-center text-danger"
                      onClick={toggleSignup}
                    >
                      Already accout exists? Signin here!
                    </div>
                    <br />
                    <h5 className="text-center">{message}</h5>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
