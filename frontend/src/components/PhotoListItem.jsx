import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const PhotoListItem = (props) => {
  const { fav, toggleFavorite, photo, handleModalAndPhoto } = props;

  const isFavorite = fav.includes(photo.id);

  return (
    <div className="photo-list__item">
      <PhotoFavButton
        fav={isFavorite}
        toggleFavorite={() => toggleFavorite(photo.id)}
      />
      <img
        onClick={() => handleModalAndPhoto(photo)}
        className="photo-list__image"
        src={photo.urls.regular}
        alt=""
      />
      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={photo.user.profile}
          alt=""
        />
        <div className="photo-list__user-info">
          <p>{photo.user.name}</p>
          <p className="photo-list__user-location">
            {photo.location.city}, {photo.location.country}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
