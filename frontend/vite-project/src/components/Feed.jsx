import React, { useState } from 'react';
import CreatePost from './CreatePost.jsx';
import Tweet from './Tweet.jsx';
import { useSelector } from 'react-redux';
import '../styles/Feed.css'; // Import your CSS file

const Feed = () => {
  const { tweets } = useSelector(store => store.tweet);
  const [activeSection, setActiveSection] = useState('forYou');

  return (
    <div className='feed-container w-[50%] border border-gray-200'>
      <div className='tabs flex justify-around p-4 bg-gray-100'>
        <div
          className={`tab cursor-pointer ${activeSection === 'forYou' ? 'font-bold' : ''}`}
          onClick={() => setActiveSection('forYou')}
        >
          For you
        </div>
        <div
          className={`tab cursor-pointer ${activeSection === 'following' ? 'font-bold' : ''}`}
          onClick={() => setActiveSection('following')}
        >
          Following
        </div>
      </div>
      <div className='content'>
        {activeSection === 'forYou' && (
          <div>
            <CreatePost />
            {tweets?.map((tweet) => (
              <Tweet key={tweet?._id} tweet={tweet} />
            ))}
          </div>
        )}
        {activeSection === 'following' && (
          <div>
            {tweets?.map((tweet) => (
              <Tweet key={tweet?._id} tweet={tweet} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Feed;
