import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({ fav, photos, toggleFavorite, handleModalAndPhoto }) => {

  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <li key={photo.id}>
          <PhotoListItem
            fav={fav}
            photo={photo}
            toggleFavorite={toggleFavorite}
            handleModalAndPhoto={handleModalAndPhoto}
          />
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;
