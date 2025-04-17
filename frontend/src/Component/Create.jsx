import React, { useState } from 'react';
import axios from "axios";

export default function Create() {
  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [age, setAge] = useState(0);

  function save_data_in_api  () {
    try {
        axios.post("http://localhost:3002/Raviha/save",(
            name,email,password,age
        ))
        alert('Data Saved Successfully')
    } catch (error) {
        console.log(error)
    }
   
  };

  return (
    <div className="container mt-4">
      <h1>User Registration Form</h1>
      <hr />

      <p>Enter Name</p>
      <input
        type="text"
        name="name"
        className="form-control my-2"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p>Enter Email</p>
      <input
        type="email"
        name="email"
        className="form-control my-2"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <p>Enter Password</p>
      <input
        type="password"
        name="password"
        className="form-control my-2"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <p>Enter Age</p>
      <input
        type="number"
        name="age"
        className="form-control my-2"
        placeholder="Enter Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <button className="btn btn-primary mt-3"onClick={save_data_in_api}>Save User</button>
    </div>
  );
}