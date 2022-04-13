import React from "react";
import sleeping from "../../../images/404.jpg";

const NotFound = () => {
  return (
    <div>
      <h2 className="text-primary text-center my-5">Mechanic is sleeping</h2>
      <img classname="w-100" src={sleeping} alt=""></img>
    </div>
  );
};

export default NotFound;
