import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";
const Service = ({ service }) => {
  const { name, img, description, price, id } = service;
  const navigate = useNavigate();
  const navigateToServiceDetail = (id) => {
    navigate(`/service/${id}`);
  };
  return (
    <div className="service">
      <img src={img} className="w-100" alt=""></img>
      <h2>This is service:{name}</h2>
      <p>Price:{price}</p>
      <p>
        <small>{description}</small>
      </p>
      <button
        onClick={() => navigateToServiceDetail(id)}
        className="btn btn-primary"
      >
        Book this service
      </button>
    </div>
  );
};

export default Service;
