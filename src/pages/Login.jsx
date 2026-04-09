import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');


    const navigate = useNavigate();


    const handleSubmit = async(e)=>{
        e.preventDefault();
        try{
          
            const res = await axios.get(`http://localhost:3000/users?email=${email}&password=${password}`);

            const users = res.data;
            // console.log(res.data)
            if(users.length >0){
                const loginUser = users[0];
                // console.log(loginUser);
                localStorage.setItem('readIndiaUser',JSON.stringify(loginUser));
            }
            else{
                console.log('Icorrect email and password.!')
            }
            alert('Login successfully.!!');
            navigate('/')

        }
        catch(error){
            console.log('Faild to login user.!!',error);
        }
    }
  return (
    <div>
        <div className="input-group">
            <input type="text" placeholder='Email' name='email' value={email}  onChange={(e)=>setEmail(e.target.value)} />
            <input type="text" placeholder='Password' name='password' value={password}  onChange={(e)=>setPassword(e.target.value)} />
            <button onClick={handleSubmit}>Login</button>
        </div>
    </div>
  )
}

export default Login