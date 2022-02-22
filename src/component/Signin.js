import React, { useState } from 'react'
import { Link , useHistory } from 'react-router-dom';
import './login.css'

// import axios from 'axios';

export default function Signin() {
    const [data, setData] = useState({
        Username: "",
        password: ""
    });
    const Handleonchange = (e) => {
        const name = e.target.name;
        const value = e.target.value

        setData({ ...data, [name]: value })
    }

    const history=useHistory()



    const Login = ({setLoginuser}) => {
        const { Username, password } = data
        if (Username && password) {
            // axios.post("http://localhost:4000/Signin", data)
            // .then(res=> console.log(res))
            fetch("http://localhost:4000/Signin", {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then(response => {
                    setLoginuser(response.data.Users)
                    history.push("/")

                })
                .then(data => {
                    console.log('Success:', data);
                    
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        } else {
            alert("invalid input")
        }
    }







    return (
        <>

            <div className='main'>
                {console.log("Data", data)}
                <form className='content container' >

                    <h1>Welcome Back</h1>
                    <h2>Sign in with
                        <a href="https://facebook.com" ><i className="bi bi-facebook"></i></a>
                        <a href="https://gmail.com" ><i className="bi bi-google"></i></a>
                    </h2>
                    <h3>or</h3>

                    <input type="text" placeholder='Username' className='inputdiv' name='Username' onChange={Handleonchange} />
                    <input type="password" placeholder='Password' className='inputdiv' name='password' onChange={Handleonchange} />
                    

                    <button type='button' className='submit btn btn-success btn-lg'onClick={Login}>Signin</button>
                    <p>Don't have an account?

                    </p>


                    <Link type='button' className='btn btn-success btn-lg'to="/Signup">Create your Account</Link>

                </form>


            </div>
        </>

    )

}