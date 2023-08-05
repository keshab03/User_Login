import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './signup.css'
const Signup = () => {
    const [formdata, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        password: '',
        confirmpassword: ''
    })
    const [content, setContent] = useState([])

    const handleData = (e) => {
        setFormData({
            ...formdata,
            [e.target.name]: e.target.value

        })
    }
    useEffect(() => {
        axios
            .get('http://localhost:4000/users')
            .then((res) => {
                console.log(res.data)
                setContent(res.data)
            })
            .catch((error) => {
                console.error(error);
            });
    }, [])

    const signup = (e) => {
        e.preventDefault();

        const validEmailUser = content.find((x) => x.Email === formdata.email);

        if (validEmailUser) {
            alert('User Already Exists');
            navigate('/');
        } else if (formdata.name && formdata.phone && formdata.email && (formdata.password === formdata.confirmpassword)) {
            axios
                .post('http://localhost:4000/register', formdata)
                .then((res) => {
                    alert(res.data.message);
                    navigate('/');

                })
                .catch(() => {
                    alert('Unable to add');
                });
        }

        console.log(formdata);
    };


    let navigate = useNavigate()
    const hac = () => {
        navigate('/')
    }
    return (
        <div>
            <form id='signup'>
                <h2>Sign-Up</h2>
                <input type="text" name='name' placeholder='Enter Name' value={formdata.name} onChange={handleData} />
                <input type="number" name='phone' placeholder='Enter Phone Number' value={formdata.phone} onChange={handleData} />
                <input type="email" name='email' placeholder='Enter Email' value={formdata.email} onChange={handleData} />
                <input type="password" name='password' placeholder='Enter Password' value={formdata.password} onChange={handleData} />
                <input type="password" name='confirmpassword' placeholder='Confirm Password' value={formdata.confirmpassword} onChange={handleData} />
                <button onClick={signup}>Sign-Up</button>
                <Link to='/' onClick={hac}>Already have an account?</Link><br></br>
            </form>
        </div>
    )
}
export default Signup