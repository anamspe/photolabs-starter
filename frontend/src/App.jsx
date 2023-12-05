import React from "react";
import useApplicationData from "./hooks/useApplicationData";

import "./App.scss";
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";

// Note: Rendering a single component to build components in isolation

const App = () => {
  const {
    fav,
    showModal, 
    photoDetails, 
    photoData,
    topicData,
    toggleFavorite, 
    handleModalAndPhoto,
    togglePhotosByTopic
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        fav={fav}
        toggleFavorite={toggleFavorite}
        showModal={showModal}
        handleModalAndPhoto={handleModalAndPhoto}
        photos={photoData}
        topics={topicData}
        togglePhotosByTopic={togglePhotosByTopic}
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
