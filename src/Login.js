import { Link } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import React, { useState } from "react";
import { auth } from "./firebase";
import "./Login.css";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));

    //Firebase work
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // it successfully created a new user with email and password

        if (auth) {
          history.push("/"); // go to homepage
        }
      })
      .catch((error) => alert(error.message));

    //Firebase work
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTkeSn3pTfQUl8OoQJGIREZa8LLKjez0lWuyg&usqp=CAU"
        ></img>
      </Link>

      <div className="login__container">
        <h1>Sign in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>{" "}
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button
            type="submit"
            onClick={signIn}
            className="login__signInButton"
          >
            Sign In
          </button>
        </form>
        <p>If you don't have account, please Join us!</p>
        <button onClick={register} className="login__registerButton">
          Create your account
        </button>
      </div>
    </div>
  );
}

export default Login;
