import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { Form, Row, Col, Button, Card, Container } from "react-bootstrap";
import './AdminListCars.css'


const AdminListCars = () => {
  const navigate = useNavigate();

  const handleAdd = () => {
    navigate("/admin_addcars")
  }
  const handleEdit = (id) => {
    navigate(`/admin_editcars/${id}`)
  }

  // kasih nilai awal semua state yang diperlukan
  const [data, setData] = useState([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    getData();
  },[])

  const getData = async () => {
    let config = {
      headers: {
        access_token: localStorage.getItem("admin_token"),
      },
    };

    try {
      const res = await axios.get(
        `https://api-car-rental.binaracademy.org/admin/v2/car`,
        config
      );
      console.log(res);
      setData(res.data.cars);
    } catch (err) {
      setErr(err.message);
    }
  };

  console.log(data)

  return (
    <div>
        <h1>Ini halaman List Cars Admin</h1>
        <Button
        onClick={handleAdd}
        >
          Add New Cars
        </Button>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
        {data.map((item) => (
          <Container
            id="restCont"
            key={item.id}
            style={{ width: "100%", maxWidth: "18rem" }}
          >
            <Card className="carCards" style={{ width: "333 px" }}>
              <Card.Img
                variant="top"
                src={item.image}
                style={{ width: "270 px", height: "160 px" }}
              />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text className="card-text">Harga: {item.price}</Card.Text>
                <Card.Text className="card-text"> {item.category}</Card.Text>
                <Card.Text className="card-text"> updatedAt : {item.updatedAt}</Card.Text>
                <Card.Text className="card-text">
                  Status: {item.status ? "Sudah disewa" : "Belum disewa"}
                </Card.Text>
                <Button
                  variant="custom"
                  disabled={item.status}
                  className="button-delete"
                >
                  Delete
                </Button>
                <Button
                  onClick={() => handleEdit(item.id)}
                  variant="custom"
                  disabled={item.status}
                  className="button-edit"
                >
                  Edit
                </Button>
              </Card.Body>
            </Card>
          </Container>
        ))}
      </div>
    </div>
  )
};

export default AdminListCars
