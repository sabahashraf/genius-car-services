import React from "react";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer classname="text-center mt-5">
      <p>
        <small className="text-center">copyright &copy;{year}</small>
      </p>
    </footer>
  );
};

export default Footer;
