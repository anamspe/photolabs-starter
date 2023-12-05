import React from "react";
import useApplicationData from "./hooks/useApplicationData";

import "./App.scss";
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import photos from "mocks/photos";
import topics from "mocks/topics";

// Note: Rendering a single component to build components in isolation

const App = () => {
  const {
    fav,
    showModal, 
    photoDetails, 
    toggleFavorite, 
    handleModalAndPhoto
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        fav={fav}
        toggleFavorite={toggleFavorite}
        showModal={showModal}
        handleModalAndPhoto={handleModalAndPhoto}
        photos={photos}
        topics={topics}
      />
      {showModal && <PhotoDetailsModal 
      photoDetails={photoDetails} 
      handleModalAndPhoto={handleModalAndPhoto}
      fav={fav}
      toggleFavorite={toggleFavorite}
       />}
    </div>
  );
};

export default App;
