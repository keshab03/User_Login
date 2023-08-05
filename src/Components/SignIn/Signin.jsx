// Signin.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './signin.css';

const Signin = () => {
    const [formdata, setFormData] = useState({
        email: '',
        password: '',
    });

    // const [content, setContent] = useState([])

    let navigate = useNavigate();

    const handleData = (e) => {
        setFormData({
            ...formdata,
            [e.target.name]: e.target.value,
        });
    };

    const signin = (e) => {
        // e.preventDefault();
        axios.post('http://localhost:4000/login',formdata)
        .then((res)=>{
            if (res.data.status===200) {
              alert(res.data.message)
              navigate('/home')
            }else{
              alert(res.data.message)
            }
        })
    
        // console.log(formdata);
    };


    const noac = () => {
        navigate('/signup');
    };

    // useEffect(() => {
    //     axios
    //         .get('http://localhost:4000/users')
    //         .then((res) => {
    //             console.log(res.data)
    //             // setContent(res.data)
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         });
    // }, [])

    return (
        <div>
            <form id='signin'>
                <h2>Sign-In</h2>
                <input type='text' name='email' placeholder='Enter Email-id' onChange={handleData} />
                <input type='password' name='password' placeholder='Enter Password' onChange={handleData} />
                <button onClick={signin}>Sign-In</button>
                <Link to='/signup' onClick={noac}>
                    Do Not Have An Account
                </Link>
            </form>
        </div>
    );
};

export default Signin;
