import React from 'react';
import { CiSearch } from 'react-icons/ci';
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';
import '../styles/Sidebars.css'; // Import your CSS file

const RightSidebar = ({ otherUsers }) => {
  return (
    <div className='custom-bar2'>
      <div className='search'>
        <CiSearch />
        <input type='text' className='bg-transparent outline-none px-2' placeholder='Search' />
      </div>
      <div className='p-4 bg-gray-100 rounded-2xl my-4'>
        <h1 className='font-bold text-lg'>Who to follow</h1>
        {otherUsers?.map((user) => (
          <div key={user?._id} className='flex items-center justify-between my-3'>
            <div className='flex'>
              <div>
                <Avatar src={user?.avatarUrl} size='40' round={true} />
              </div>
              <div className='ml-2'>
                <h1 className='font-bold'>{user?.name}</h1>
                <p className='text-sm'>{`@${user?.username}`}</p>
              </div>
            </div>
            <div>
              <Link to={`/profile/${user?._id}`}>
                <button className='profile-button'>Profile</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightSidebar;


