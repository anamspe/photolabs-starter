import React from "react";

import "../styles/HomeRoute.scss";
import TopNavigation from "../components/TopNavigationBar";
import PhotoList from "../components/PhotoList";

const HomeRoute = ({
  handleModalAndPhoto,
  fav,
  toggleFavorite,
  photos
}) => {
  return (
    <span className="home-route">
      <TopNavigation fav={fav.length > 0} />
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
