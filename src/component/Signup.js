import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './login.css'
import { useHistory } from 'react-router-dom';




export default function Signup() {
    const history=useHistory();
    const [data, setData] = useState({
        FirstName: "",
        LastName: "",
        Username: "",
        password: ""
    });
    const Handleonchange = (e) => {
        const name = e.target.name;
        const value = e.target.value

        setData({ ...data, [name]: value })
    }

    const register = () => {
        const { FirstName, LastName, Username, password } = data
        if(FirstName && LastName && Username &&password){
            
            fetch("http://localhost:4000/Signup", {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                history.push("/");
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        }else{
            alert("invalid input")
        }

        

        


    }
    return (
        <>
            <div className='main'>
                {console.log("Data", data)}
                <form className='content container' >

                    <h1>Welcome Back</h1>
                    <h2>Create Your Account</h2>

                    <input type="text" placeholder='First Name' className='inputdiv' name='FirstName' onChange={Handleonchange} />
                    <input type="text" placeholder='Last Name' className='inputdiv' name='LastName' onChange={Handleonchange} />
                    <input type="email" placeholder='Email' className='inputdiv' name='Username' onChange={Handleonchange} />
                    <input type="password" placeholder='Password' className='inputdiv' name='password' onChange={Handleonchange} />


                    <button type='button' className='submit btn btn-success btn-lg' onClick={register}>Register</button>
                    <p>If you have register already? <Link to="/Signin">Sign in</Link>

                    </p>

                </form>


            </div>
        </>
    )
}
