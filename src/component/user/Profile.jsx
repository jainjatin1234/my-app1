import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../layouts/Loading';


const Profile = () => {

  const { user, isAuthenticated, error, loading } = useSelector(
    (state) => state.auth
  )

  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/')
    }
  })

  return (
    <>
      {
        loading ? (
          <Loading />
        ) : (
          <>
            <h1>My Profile</h1>
            <br />
            <img src={user?.image?.url} style={{ width: "100px" }} alt="" />
            <br />
            <br />
            <h1> Name : {user.name}</h1>
            <br />
            <h1>Email : {user.email}</h1>

            <Link to='/updateprofile'>
              <button class="btn mt-4 btn btn-primary">Update Profile</button>
            </Link>

            <Link to='/updatepasword'>
              <button class="btn mt-4 btn btn-primary">Update Password</button>

              </Link >

            </>

            )
      }
          </>
        );
}

      export default Profile;
