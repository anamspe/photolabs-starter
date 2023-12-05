import React from "react";

import "../styles/HomeRoute.scss";
import TopNavigation from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

const HomeRoute = ({
  handleModalAndPhoto,
  fav,
  toggleFavorite,
  photos,
  topics
}) => {
  return (
    <span className="home-route">
      <TopNavigation fav={fav.length > 0} topics={topics} />
      <PhotoList
        fav={fav}
        toggleFavorite={toggleFavorite}
        handleModalAndPhoto={handleModalAndPhoto}
        photos={photos}
      />
    </span>
  );
};

export default HomeRoute;
