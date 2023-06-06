import React from "react";
import "./index.css";

function LoginPage2() {
  return (
    <div className="login-page-2">
      <div className="row">
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div className="text-part d-flex flex-column">
            <h1>LOGIN</h1>
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Password" />
            <button>LOGIN</button>
            <div className="d-flex justify-content-between mt-2 w-100 align-items-center">
              <div className="left-divider"></div>
              <p className="mb-2 mx-2">OR</p>
              <div className="right-divider"></div>
            </div>
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <img
            src="https://images.unsplash.com/photo-1506220926022-cc5c12acdb35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Black and blue bird"
          />
        </div>
      </div>
    </div>
  );
}

export default LoginPage2;
