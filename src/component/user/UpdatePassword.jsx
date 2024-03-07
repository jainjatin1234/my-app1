import React, { useEffect, useState } from 'react';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserPassword } from '../../redux/action/UserAction';
import Loading from '../layouts/Loading';
import MetaData from '../layouts/MetaData';

const UpdatePassword = () => {
  const [oldpassword,setOldpassword] = useState()
  const [newpassword,setNewpassword] = useState()
  const [confirmpassword,setConfirmpassword] = useState()

  const dispatch = useDispatch()
  const alert = useAlert()

  const { user, loading } = useSelector(
    (state) => state.auth

);


useEffect(()=>{
  if(user){
    setOldpassword(user.oldpassword)
  }

},)

  const submitHandle = (e) =>{
    e.preventDefault()
    const formData = new FormData()
    formData.append("oldpassword",oldpassword)
    dispatch(updateUserPassword(formData))
  }

  

  return (
    <>
    {
        loading ? (
            <Loading />
        ) : (
            <>
                <MetaData title={'updatepassword'} />


            </>
        )


    }
    <div className='container'>
        <div className='px-5'>
            <center><h3 className='mb-3'>Update Profile</h3></center>
            <form onSubmit={submitHandle}>
                <div className="form-group">
                    <label>oldpassword</label>
                    <input value={oldpassword} type="password" name='password' className="form-control" placeholder="Enter oldPassword" onChange={(e) => setOldpassword(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>newpassword</label>
                    <input value={newpassword} type="password" name='newpassword' className="form-control" placeholder="Enter newpassword" onChange={(e) => setNewpassword(e.target.value)} />
                </div>

                <div className="form-group">
                    <label>confirmpassword</label>
                    <input value={confirmpassword} type="password" name='confirmpassword' className="form-control" placeholder="Enter confirmpassword" onChange={(e) => setConfirmpassword(e.target.value)} />
                </div>
           
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        </div>
    </div>
</>
  );
}

export default UpdatePassword;
