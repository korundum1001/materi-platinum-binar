import axios from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";



const Register = () => {
const [form, setForm] = useState({
    email: "",
    password: "",
});

// Inisialisasi fungsi untuk berpindah path
const navigate = useNavigate();


// Settingan agar ketika sudah login tidak bisa mengakses
// halaman ini lagi
useEffect(() => {
  let existstoken = localStorage.getItem("token");
  if(existstoken && existstoken !== null) {
      navigate("/");
  }
}, []);

// Inisialisasi state
const [succ, setSucc] = useState("")
const [err, setErr] = useState("");
const [load, setLoad] =useState(false);

// Bikin fungsi untuk menangani perubahan input
const handleChange = (e) => {
    const {name, value} = e.target;
    setForm({ ...form, [name]:value})
}

// Berhubungan dengan API
const handleSubmit = () => {
    setLoad(true)
    const data = {
        email: form.email,
        password: form.password,
    };

    axios.post(`https://api-car-rental.binaracademy.org/customer/auth/register`, data

    )
    .then((res) => {
        if (res.status === 201) {
            setSucc("berhasil")
        }
        setLoad("false");
        setTimeout(() => {
            navigate("/login")
        }, 3000)
    })
    .catch((err) => {
        console.log(err);
        setErr("error");
        setLoad(false)
    })
}

  return (
    <div>
        {succ && <h1 style={{color: "green"}}>{succ}</h1> }
      <div>
        <label>email</label>
        <input name="email" value={form.email} onChange={handleChange}/>
      </div>
      <div>
        <label>password</label>
        <input name="password" value={form.password} onChange={handleChange} />
      </div>

      <button disabled={load ? true : false} onClick={handleSubmit}>{load ? "Loading..." : "submit"}</button>
    </div>
  );
};

export default Register