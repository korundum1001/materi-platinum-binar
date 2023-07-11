import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const AdminLogin = () => {
  //   Inisiasi fungsi untuk navigasi antar path
  const navigate = useNavigate();

  // Bikin hook agar tidak bisa kembali ke halaman login ketika sudah login
  useEffect(() => {
    let existstoken = localStorage.getItem("admin_token");
    if (existstoken && existstoken !== undefined) {
      navigate("/");
    }
  }, []);

  // Atur nilai awal states
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [succ, setSucc] = useState("");
  const [err, setErr] = useState("");
  const [load, setLoad] = useState(false);

  // Bikin fungsi untuk menangani input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    setLoad(true);
    const data = {
      email: form.email,
      password: form.password,
    };


    axios
      .post(`https://api-car-rental.binaracademy.org/admin/auth/login`, data)
      .then((res) => {
        console.log(res);
        localStorage.setItem("admin_token", res.data.access_token);
        localStorage.setItem("role", res.data.role);
        setSucc(alert("berhasil"));
        setLoad(false);
        setTimeout(() => {
          navigate("/admin_dashboard");
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
        setErr(alert(err.response.data.message));
        setLoad(false);
      });
  };

  return (
    <div>
      {succ && <h1 style={{ color: "green" }}>{succ}</h1>}
      <div>
        <label>email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>password</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
      </div>

      <button disabled={load ? true : false} onClick={handleSubmit}>
        {load ? "Loading..." : "submit"}
      </button>
    </div>
  );
};

export default AdminLogin;
