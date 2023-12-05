import React from "react";
import useApplicationData from "./hooks/useApplicationData";

import "./App.scss";
import HomeRoute from "./routes/HomeRoute";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";

// Note: Rendering a single component to build components in isolation

const App = () => {
  //import states, data and functions from custom hook
  const {
    fav,
    showModal,
    photoDetails,
    photoData,
    topicData,
    dark,
    toggleFavorite,
    handleModalAndPhoto,
    togglePhotosByTopic,
    toggleDarkMode
  } = useApplicationData();

  return (
    <div className={`App ${dark}`}>
      <HomeRoute
        fav={fav} //favorites state - present throughout all components so it displays if it's been favorited or not
        photos={photoData} //photos from db
        topics={topicData} //topics from db
        toggleFavorite={toggleFavorite} //handler to add or remove from favorites
        handleModalAndPhoto={handleModalAndPhoto} //toggle to display modal and send photo data
        togglePhotosByTopic={togglePhotosByTopic} //function to toggle photos by topic
        dark={dark}
        toggleDarkMode={toggleDarkMode} //function to toggle dark mode
      />
      {showModal && (
        <PhotoDetailsModal
          fav={fav}
          photoDetails={photoDetails} //data from the clicked photo to be rendered by the modal
          handleModalAndPhoto={handleModalAndPhoto} //here it is used to close the modal
          toggleFavorite={toggleFavorite}
        />
      )}
    </div>
  );
};

export default App;
