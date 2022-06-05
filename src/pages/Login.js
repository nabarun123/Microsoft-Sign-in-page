import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  const [showSignup, setShowSignup] = useState(false);
  const toggleSignup = () => {
    setShowSignup(!showSignup);
  };

  const signinFn = (e) => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const data = {
      email: email,
      password: password,
    };
    console.log(data);
    alert("Logged in successful!");
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
                      />
                    </div>
                    <div className="input-group m-1">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>

                    <div className="input-group m-1">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                      />
                    </div>
                    <div className="input-group m-1">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Confirm Password"
                      />
                    </div>

                    <div className="input-group m-1">
                      <input
                        type="submit"
                        className="form-control btn btn-primary"
                        value="Sign up"
                      />
                    </div>
                    <div
                      className="text-center text-danger"
                      onClick={toggleSignup}
                    >
                      Already accout exists? Signin here!
                    </div>
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
