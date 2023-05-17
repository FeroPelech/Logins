import React from "react";
import "./index.css";
function LoginPage1() {
  return (
    <div className="login-page-1">
      <div className="row">
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div className="text-part d-flex flex-column">
            <h1>LOGIN</h1>
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Password" />
            <button>LOGIN</button>
            <div className="d-flex justify-content-between mt-2 w-75">
              <a href="">Forgot Password?</a>
              <a href="">Register</a>
            </div>
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-center">
          <img
            src="https://media.istockphoto.com/id/1154370446/photo/funny-raccoon-in-green-sunglasses-showing-a-rock-gesture-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=kkZiaB9Q-GbY5gjf6WWURzEpLzNrpjZp_tn09GB21bI="
            alt="FunkyBear"
          />
        </div>
      </div>
      <div className="login-page-1-rectangle"></div>
    </div>
  );
}

export default LoginPage1;
