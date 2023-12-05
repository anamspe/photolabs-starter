import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoFavButton from "components/PhotoFavButton";
import PhotoList from "components/PhotoList";


const PhotoDetailsModal = ({
  fav,
  photoDetails,
  handleModalAndPhoto,
  toggleFavorite
}) => {

 const isFavorite = fav.includes(photoDetails.id);

 const similar_photos = photoDetails.similar_photos;

  return (
    <div className="photo-details-modal">
      <button
        onClick={handleModalAndPhoto}
        className="photo-details-modal__close-button"
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="photo-details-modal__images">
        <PhotoFavButton
          fav={isFavorite}
          toggleFavorite={() => toggleFavorite(photoDetails.id)}
        />

        <img
          className="photo-details-modal__image"
          src={photoDetails.urls.full}
          alt=""
        />
        <div className="photo-details-modal__photographer-details">
          <img
            className="photo-details-modal__photographer-profile"
            src={photoDetails.user.profile}
            alt=""
          />
          <div className="photo-details-modal__photographer-info">
            <p>{photoDetails.user.name}</p>
            <p className="photo-details-modal__photographer-location">
              {photoDetails.location.city}, {photoDetails.location.country}
            </p>
          </div>
        </div>
        <div className="photo-details-modal__header">
          <p>Similar Photos</p>
        </div>
      </div>
      <PhotoList
        fav={fav}
        photos={similar_photos}
        toggleFavorite={toggleFavorite}
        handleModalAndPhoto={handleModalAndPhoto}
      />
    </div>
  );
};

export default PhotoDetailsModal;
