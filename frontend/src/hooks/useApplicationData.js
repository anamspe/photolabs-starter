import { useState, useReducer } from "react";

export const ACTIONS = {
  TOGGLE_FAVORITE: 'TOGGLE_FAVORITE',
  TOGGLE_MODAL_AND_PHOTO_DETAILS: 'TOGGLE_MODAL_AND_PHOTO_DETAILS',
  // FAV_PHOTO_ADDED: 'FAV_PHOTO_ADDED',
  // FAV_PHOTO_REMOVED: 'FAV_PHOTO_REMOVED',
  // SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  // SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  // SELECT_PHOTO: 'SELECT_PHOTO',
  // DISPLAY_PHOTO_DETAILS: 'DISPLAY_PHOTO_DETAILS'
};

const useApplicationData = () => {
  
const initialState = {
  fav: [],
  showModal: false,
  photoDetails: null
};


function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.TOGGLE_FAVORITE:
      const isFavorite = state.fav.includes(action.payload);
      const updatedFav = isFavorite
        ? state.fav.filter((id) => id !== action.payload)
        : [...state.fav, action.payload];
      return {
        ...state,
        fav: updatedFav
      };
    case ACTIONS.TOGGLE_MODAL_AND_PHOTO_DETAILS:
      return {
        ...state,
        showModal: !state.showModal,
        photoDetails: action.payload
      };
    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}


const [state, dispatch] = useReducer(reducer, initialState)

const toggleFavorite = (photoId) => {
  dispatch({type: ACTIONS.TOGGLE_FAVORITE, payload: photoId});
}

const handleModalAndPhoto = (photo) => {
  dispatch({type: ACTIONS.TOGGLE_MODAL_AND_PHOTO_DETAILS, payload: photo});
}


return {
  ...state,
  toggleFavorite,
  handleModalAndPhoto,
};

};

export default useApplicationData;



// const [fav, setFav] = useState([]);
// const [showModal, setShowModal] = useState(false);
// const [photoDetails, setPhotoDetails] = useState(null);

// // Function to toggle favorite status of a photo
// const toggleFavorite = (photoId) => {
//   //Check if photo is favorited by checking if the photoId is in the fav array(original state)
//   const isFavorite = fav.includes(photoId);

//   //Remove photo from favorites if already there
//   if (isFavorite) {
//     setFav((prevFav) => prevFav.filter((id) => id !== photoId));
//   } else {
//     //Add photo to favorites
//     setFav((prevFav) => [...prevFav, photoId]);
//   }
// };

// //Function to handle modal visibility and setPhotoDetails in the modal
// const handleModalAndPhoto = (photo) => {
//   //Set showModal to true if false and vice-versa
//   setShowModal((prev) => !prev);
//   setPhotoDetails(photo);

// };