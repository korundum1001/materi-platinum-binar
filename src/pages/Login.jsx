import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";


const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    let existstoken = localStorage.getItem("token");
    if(existstoken && existstoken !== null) {
        navigate("/");
    }
}, []);

  const [succ, setSucc] = useState("");
  const [err, setErr] = useState("");
  const [load, setLoad] = useState(false);


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
    .post(`https://api-car-rental.binaracademy.org/customer/auth/login`, data)
    .then((res) => {
      console.log(res);
      localStorage.setItem("token", res.data.access_token);
      localStorage.setItem("role", res.data.role)
      setSucc(alert("berhasil"))
    setLoad(false);
    setTimeout(() => {
        navigate("/")
    }, 3000)
    })
    .catch((err) => {
        console.log(err);
        setErr(alert(err.response.data.message));
        setLoad(false)
    })
  };

  

  return (
    <div>
      {succ && <h1 style={{ color: "green" }}>{succ}</h1>}
      <div>
        <label>email</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} />
      </div>
      <div>
        <label>password</label>
        <input type="password" name="password" value={form.password} onChange={handleChange} />
      </div>

      <button disabled={load ? true : false} onClick={handleSubmit}>
        {load ? "Loading..." : "submit"}
      </button>
    </div>
  );
};

export default Login;
