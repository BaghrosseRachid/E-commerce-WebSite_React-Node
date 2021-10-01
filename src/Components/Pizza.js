import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
const Pizza = ({ pizza }) => {
  const [varient, setVarient] = useState("small");
  const [quantity, setQuantity] = useState(1);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div
      style={{ margin: "80px" }}
      className="shadow-lg p-3 mb-5 bg-white rounded"
    >
      <div onClick={handleShow}>
        <h3>{pizza.name}</h3>
        <img
          src={pizza.image}
          className="img-fluid"
          style={{ height: "200px", width: "200px" }}
        ></img>
      </div>
      <div className="flex-container">
        <div className="w-100 m-1">
          <p>variants</p>
          <select
            className="form-control"
            value={varient}
            onChange={(e) => setVarient(e.target.value)}
          >
            {pizza.varients.map((varient) => {
              return <option value={varient}>{varient}</option>;
            })}
          </select>
        </div>
        <div className="w-100 m-1">
          <p>Quantity</p>
          <select
            className="form-control"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          >
            {[...Array(10).keys()].map((x, i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </div>
      </div>
      <div className="flex-container">
        <div className="w-100 m-1">
          <h5 className="mt-1">Price: {pizza.prices[0][varient] * quantity}</h5>
        </div>
        <div className="w-100 m-1">
          <button className="button">Add to cart</button>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img
            src={pizza.image}
            className="img-fluid ml-5"
            style={{ height: "300px" }}
          />
          <p className="mt-2">
            <i>Description : </i>
            {pizza.description}
          </p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Pizza;
