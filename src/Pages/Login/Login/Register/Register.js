import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../../../firebase.init";
import SocialLogin from "../../SocialLogin/SocialLogin";
import Loading from "../../../Shared/Loading/Loading";

const Register = () => {
  const [agree, setAgree] = useState(false);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const navigate = useNavigate();
  const navigateLogin = () => {
    navigate("/login");
  };
  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    console.log(name);
    const email = event.target.email.value;
    const password = event.target.password.value;
    //const agree = event.target.terms.checked;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    console.log("update profile");
    navigate("/home");
  };
  /* if (user) {
    navigate("/home");
  } */
  if (loading) {
    return <Loading></Loading>;
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
        {/*  <label
          className={agree ? "ps-2 text-primary" : "ps-2 text-danger"}
          htmlFor="terms"
        >
          Genius cars terms and conditions
        </label> */}
        <label className={`ps-2 ${agree ? "" : "text-danger"}`} htmlFor="terms">
          Genius cars terms and conditions
        </label>
        <input
          onClick={() => setAgree(!agree)}
          type="checkbox"
          name="terms"
          id="terms"
        />
        <input
          disabled={!agree}
          className="d-block w-50 btn btn-primary mx-auto mt-2"
          type="submit"
          value="Register"
          required
        />
      </form>
      <p>
        Already have an account?
        <Link
          to="/login"
          className="text-primary pe-auto text-decoration-none"
          onClick={navigateLogin}
        >
          Please Login
        </Link>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Register;
