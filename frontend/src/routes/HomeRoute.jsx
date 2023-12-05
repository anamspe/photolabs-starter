import React from "react";

import "../styles/HomeRoute.scss";
import TopNavigation from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

const HomeRoute = ({
  fav,
  photos,
  topics,
  dark,
  toggleFavorite,
  handleModalAndPhoto,
  togglePhotosByTopic,
  toggleDarkMode,
}) => {
  return (
    <span className="home-route">
      <TopNavigation
        fav={fav}
        topics={topics}
        togglePhotosByTopic={togglePhotosByTopic}
        dark={dark}
        toggleDarkMode={toggleDarkMode}
      />
      <PhotoList
        fav={fav}
        photos={photos}
        toggleFavorite={toggleFavorite}
        handleModalAndPhoto={handleModalAndPhoto}
      />
    </span>
  );
};

export default HomeRoute;
