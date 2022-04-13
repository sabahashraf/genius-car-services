import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";

const Register = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const navigateLogin = () => {
    navigate("/login");
  };
  const handleRegister = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(email, password);
  };
  if (user) {
    navigate("/home");
  }
  return (
    <div className="register-form">
      <h2 style={{ textAlign: "center" }} className="my-5">
        Please Register
      </h2>
      <form onSubmit={handleRegister}>
        <input type="text" name="name" id="" placeholder="your name" required />

        <input
          type="email"
          name="email"
          id=""
          placeholder="your email"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="your password"
        ></input>
        <input type="submit" value="Register" required />
      </form>
      <p>
        Already have an account?
        <Link
          to="/login"
          className="text-danger pe-auto text-decoration-none"
          onClick={navigateLogin}
        >
          Please Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
