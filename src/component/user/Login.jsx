import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { useAlert } from 'react-alert'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../layouts/Loading';
import MetaData from '../layouts/MetaData';
import { loginUser } from '../../redux/action/UserAction';
import { useEffect } from 'react';

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const alert = useAlert()

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const { isAuthenticated, error, loading } = useSelector(
        (state) => state.auth
    )

    const loginHandler = (e) => {
        e.preventDefault()
        console.log(email + password)
        dispatch(loginUser(email,password))

    }

    useEffect(()=>{
        if (isAuthenticated){
            navigate('/')
            alert.success('login successfully')
        }
        if(error){
            alert.error(error)
        }
    },[error,alert,dispatch,isAuthenticated,navigate])

    return (
        <>

            {
                loading ? (
                    <Loading />
                ) : (
                    <>
                        <MetaData title={'Login'} />
                        <form onSubmit={loginHandler} method="post">
                            <div class="form-group">
                                <input type="email" name="email" class="form-control" placeholder=" Email or Username" onChange={(e) => setEmail(e.target.value)} required />
                            </div>
                            <div class="form-group">
                                <input type="password" name="password" class="form-control" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div class="form-group">
                                <button class="btn btn-dark">Log In</button>
                            </div>
                            <div class="form-group">
                                <Link to={'/register'} class="btn btn-primary">Sign Up</Link>
                            </div>
                        </form>
                    </>
                )

            }

        </>

    )

}




export default Login;
