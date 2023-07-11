import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const AdminAddCars = () => {
  return (
    <div>
      <h1>Add New Cars</h1>
      <div>
        Nama Tipe Mobil : 
        <input  />
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

export default AdminAddCars;

// const handleChangePhoto = (e) => {
//     console.log(e.target.files);
//     setPhoto(e.target.files[0]);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("category", category);
//     formData.append("price", parseInt(price));
//     formData.append("status", false);
//     formData.append("image", photo);

//     const config = {
//       headers: {
//         "Content-Type": "multipart/form-data",
//         access_token:
//           "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY4ODk5Mzk3M30.nKJbi0qYrrXvWgXrjB4TD8RcfcTLYHueOzmZN2bE9t4",
//       },
//     };

//     axios
//       .post(
//         "https://api-car-rental.binaracademy.org/admin/car",
//         formData,
//         config
//       )
//       .then((res) => console.log(res))
//       .catch((err) => console.log(err));
//   };
