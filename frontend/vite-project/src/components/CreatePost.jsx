import React, { useState } from 'react';
import Avatar from 'react-avatar'; // Importing Avatar component for profile pictures
import { CiImageOn } from 'react-icons/ci'; // Importing an image icon from react-icons
import axios from 'axios'; // Importing axios for making HTTP requests
import { TWEET_API_END_POINT } from '../utils/constant'; // Importing the API endpoint constant
import toast from 'react-hot-toast'; // Importing toast for displaying notifications
import { useSelector, useDispatch } from 'react-redux';// Importing hooks from react-redux
import { getAllTweets, getIsActive, getRefresh } from '../redux/tweetSlice'; // Importing actions from tweetSlice
import '../styles/CreatePost.css'; // Import your CSS file

const CreatePost = () => {
  const [description, setDescription] = useState(''); // State for the post description
  const { user } = useSelector(store => store.user); // Accessing user data from the Redux store
  const { isActive } = useSelector(store => store.tweet); // Accessing tweet state from the Redux store
  const dispatch = useDispatch(); // Initializing dispatch to use Redux actions

  const submitHandler = async () => {
    try {
      // Making a POST request to create a new tweet
      const res = await axios.post(
        `${TWEET_API_END_POINT}/create`,
        { description, id: user?._id },
        {
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true
        }
      );
      dispatch(getRefresh()); // Dispatching action to refresh the tweets
      if (res.data.success) {
        toast.success(res.data.message); // Displaying success notification
      }
    } catch (error) {
      toast.error(error.response.data.message); // Displaying error notification
      console.log(error);
    }
    setDescription(''); // Clearing the input field
  };
  // Function to handle "For You" tab selection
  const forYouHandler = () => {
    dispatch(getIsActive(true));
  };

  // Function to handle "Following" tab selection
  const followingHandler = () => {
    dispatch(getIsActive(false));
  };

  return (
    <div className='create-post-container'>
      <div className='create-post'>
        <div className='create-post-header'>
          <Avatar
            src='https://pbs.twimg.com/profile_images/1703261403237502976/W0SFbJVS_400x400.jpg'
            size='40'
            round={true}
          />
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className='create-post-input'
            type='text'
            placeholder='What is happening?!'
          />
        </div>
        <div className='create-post-footer'>
          <CiImageOn size='24px' color='white'/>
          <button onClick={submitHandler} className='post-button'>
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
