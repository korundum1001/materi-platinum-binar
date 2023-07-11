import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

const Homepage = () => {
  const [data, setData] = useState([]);
  const [err, setErr] = useState("");
  const [filter, setFilter] = useState({
    name: "",
    category: "",
    minPrice: "",
    maxPrice: "",
    isRented: ""
  });

  useEffect(() => {
    getData();
  }, [filter]);

  const getData = async () => {
    try {
      const res = await axios.get(
        `https://api-car-rental.binaracademy.org/customer/v2/car?name=${filter.name}&category=${filter.category}&minPrice=${filter.minPrice}&maxPrice=${filter.maxPrice}&isRented=${filter.isRented}`
      );
      setData(res.data.cars);
    } catch (err) {
      setErr(err.message);
      cleanErrorState();
    }
  };

  const cleanErrorState = () => {
    setTimeout(() => {
      setErr("");
    }, 4000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilter((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  console.log(data);
  return (
    <div>
      <Navbar/>
      {err && <h1>{err}</h1>}
      <h1>Ini halaman homepage</h1>
      <label>Nama Mobil</label>
      <input name="name" value={filter.name} onChange={handleChange} />
      <input name="category" value={filter.category} onChange={handleChange} />
      <input name="minPrice" value={filter.minPrice} onChange={handleChange} />
      <input name="maxPrice" value={filter.maxPrice} onChange={handleChange} />
      <input name="isRented" value={filter.isRented} onChange={handleChange} />
      {data.map((item) => (
        <div key={item.id}>
          <p>Name: {item.name}</p>
          <p>Price: {item.price}</p>
          <p>{item.category}</p>
        </div>
      ))}
    </div>
  );
};

export default Homepage;


  // const getData = () => {
  //   let api = `https://api-car-rental.binaracademy.org/customer/v2/car?name=${filter.name}&category=${filter.category}&minPrice=${filter.minPrice}&maxPrice=${filter.maxPrice}&isRented=${filter.isRented}`;
  //   axios
  //     .get(api)
  //     .then((res) => {
  //       setData(res.data.cars);
  //     })
  //     .catch((err) => {
  //       setErr(err.message);
  //     });

  //   cleanErrorState();
  // };