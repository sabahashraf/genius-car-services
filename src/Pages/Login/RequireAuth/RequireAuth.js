import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";

const RequireAuth = ({ children }) => {
  const [sendEmailVerification] = useSendEmailVerification(auth);
  const [user, loading] = useAuthState(auth);
  let location = useLocation();
  if (loading) {
    return <Loading></Loading>;
  }

  if (!user) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  console.log(user);
  if (user.providerData[0].providerId === "password" && !user.emailVerified) {
    return (
      <div className="='text-center my-5">
        <h3 classname="text-danger">Your email is not verified!</h3>
        <h5 classname="text-success">Please verify your email address</h5>
        <button
          className="btn btn-primary"
          onClick={async () => {
            await sendEmailVerification();
            alert("sent email");
          }}
        ></button>
      </div>
    );
  }

  return children;
};

export default RequireAuth;
