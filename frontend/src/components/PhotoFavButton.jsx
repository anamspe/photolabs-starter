import React, { useCallback, useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton(props) {
  const {fav, toggleFavorite} = props;

  return (
    <div onClick={toggleFavorite} className='photo-list__fav-icon'>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={fav} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
