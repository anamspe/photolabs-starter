import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = (props) => {
  const { fav, toggleFavorite, handleModalAndPhoto, photos } = props;

  return (
    <ul className="photo-list">
        {photos.map((photo) => (
          <li key={photo.id}>
            <PhotoListItem
              photo={photo}
              fav={fav}
              toggleFavorite={toggleFavorite}
              handleModalAndPhoto={handleModalAndPhoto}
            />
          </li>
        ))}
    </ul>
  );
};

export default PhotoList;
