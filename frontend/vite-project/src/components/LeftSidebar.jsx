import React from 'react';
import { CiHome, CiHashtag, CiUser, CiBookmark } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { AiOutlineLogout } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { USER_API_END_POINT } from '../utils/constant';
import toast from "react-hot-toast";
import { getMyProfile, getOtherUsers, getUser } from '../redux/userSlice';
import '../styles/Sidebars.css';
import Logo from '../images/logo.avif';

const LeftSidebar = () => {
    const { user } = useSelector(store => store.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const logoutHandler = async () => {
        try {
            const res = await axios.get(`${USER_API_END_POINT}/logout`);
            dispatch(getUser(null));
            dispatch(getOtherUsers(null));
            dispatch(getMyProfile(null));
            navigate('/login');
            toast.success(res.data.message);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='sidebar'>
            <div className='logo-container'>
                <img className='logo' src={Logo} alt="logo" />
            </div>
            <div className='menu'>
                <Link to="/" className='menu-item'>
                    <CiHome size="24px" />
                    <h1>Home</h1>
                </Link>
                <Link to="/explore" className='menu-item'>
                    <CiHashtag size="24px" />
                    <h1>Explore</h1>
                </Link>
                <Link to="/notifications" className='menu-item'>
                    <IoIosNotificationsOutline size="24px" />
                    <h1>Notifications</h1>
                </Link>
                <Link to={`/profile/${user?._id}`} className='menu-item'>
                    <CiUser size="24px" />
                    <h1>Profile</h1>
                </Link>
                <Link to="/bookmarks" className='menu-item'>
                    <CiBookmark size="24px" />
                    <h1>Bookmarks</h1>
                </Link>
                <div onClick={logoutHandler} className='menu-item'>
                    <AiOutlineLogout size="24px" />
                    <h1>Logout</h1>
                </div>
            </div>
            <div className='profile'>
                <img src={user?.profilePicture} alt="profile" className='profile-picture' onClick={logoutHandler} />
            </div>
        </div>
    );
};

export default LeftSidebar; 

