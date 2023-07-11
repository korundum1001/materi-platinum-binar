import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const AdminEditCars = () => {
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
      <h1>Edit Car</h1>
      <div>
        Nama Tipe Mobil :
        <input /> 
      </div>
      <div>
        Foto :
        <input />
      </div>
      <div>
        Kategori :
        <select value="">
          <option value="">small</option>
          <option value="">medium</option>
          <option value="">large</option>
        </select>
      </div>
    </div>
  );
};

export default AdminEditCars;
