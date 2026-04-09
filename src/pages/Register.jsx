import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {

    const [form,setForm] = useState({
        name:"",
        email:"",
        password:"",
    });

    const navigate = useNavigate();

    const handleChange = (e)=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        try{
            const newUser = {
                name:form.name,
                email:form.email,
                password:form.password,
                role:'user'
            }
            await axios.post('http://localhost:3000/users',newUser);
            alert('Register successfully.!!');
            navigate('/login')

        }
        catch(error){
            console.log('Faild to register user.!!',error);
        }
    }
  return (
    <div>
        <div className="input-group">
            <input type="text" placeholder='Name' name='name' value={form.name} onChange={handleChange} />
            <input type="text" placeholder='Email' name='email' value={form.email}  onChange={handleChange} />
            <input type="text" placeholder='Password' name='password' value={form.password}  onChange={handleChange} />
            <button onClick={handleSubmit}>Register</button>
            <span>Already have an account?</span><Link to='/login'>Login</Link>
        </div>
    </div>
  )
}

export default Register