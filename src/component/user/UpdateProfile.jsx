import React from 'react'
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from '../layouts/Loading';
import MetaData from '../layouts/MetaData';
import { useState } from 'react';
import { useEffect } from 'react';
import { clearErrors, loadUser, updateUserProfile } from '../../redux/action/UserAction';
import { UPDATE_PROFILE_RESET } from '../../redux/constants/UserConstant';


function Updateprofile() {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const alert = useAlert()
    const { user } = useSelector(
        (state) => state.auth

    );
    const { error, isUpdated, loading } = useSelector(state => state.user)

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [image, setImage] = useState()

    useEffect(() => {
        if (user) {
            setName(user.name)
            setEmail(user.email)
            setImage(user?.image?.url)
        }
        if (error) {
            alert.error(error)
            dispatch(clearErrors())
        }
        if (isUpdated) {
            alert.success('User Updates Successfull')
            dispatch(loadUser())
            navigate('/profile')

            dispatch({
                type: UPDATE_PROFILE_RESET
            })
        }
    }, [dispatch, alert, error, isUpdated, navigate])

    const submitHandle = (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append("name", name);
        formData.append('email', email);
        image && formData.append('image', image);
        dispatch(updateUserProfile(formData))

    }
    return (
        <>
            {
                loading ? (
                    <Loading />
                ) : (
                    <>
                        <MetaData title={'updateprofile'} />


                    </>
                )


            }
            <div className='container'>
                <div className='px-5'>
                    <center><h3 className='mb-3'>Update Profile</h3></center>
                    <form onSubmit={submitHandle}>
                        <div className="form-group">
                            <label>Name</label>
                            <input value={name} type="text" name='name' className="form-control" placeholder="Enter name" onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Email address</label>
                            <input value={email} type="email" name='email' className="form-control" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label >Upload Image</label>
                            <img src={user?.image?.url} height={"50px"} alt="" />
                            <input type="file" name='image' className="form-control" onChange={(e) => setImage(e.target.files[0])} />
                        </div>
                        <button type="submit" className="btn btn-success">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Updateprofile
