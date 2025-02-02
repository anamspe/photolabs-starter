import React from 'react';

import '../styles/TopNavigationBar.scss'
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigation = ({fav, topics, togglePhotosByTopic}) => {

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} togglePhotosByTopic={togglePhotosByTopic} />
      <FavBadge isFavPhotoExist={fav.length > 0} />
    </div>
  );
}

export default TopNavigation;