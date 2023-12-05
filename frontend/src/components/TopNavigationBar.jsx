import React from "react";

import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";

const TopNavigation = ({
  fav,
  topics,
  togglePhotosByTopic,
  dark,
  toggleDarkMode,
}) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} togglePhotosByTopic={togglePhotosByTopic} />
      <button onClick={() => toggleDarkMode()}>
        <i className="fa-regular fa-lightbulb" />
      </button>
      <FavBadge isFavPhotoExist={fav.length > 0} />
    </div>
  );
};

export default TopNavigation;
