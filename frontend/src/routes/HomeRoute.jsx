import React from "react";

import "../styles/HomeRoute.scss";
import TopNavigation from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

const HomeRoute = ({
  fav,
  photos,
  topics,
  toggleFavorite,
  handleModalAndPhoto,
  togglePhotosByTopic,
}) => {
  return (
    <span className="home-route">
      <TopNavigation
        fav={fav}
        topics={topics}
        togglePhotosByTopic={togglePhotosByTopic}
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
