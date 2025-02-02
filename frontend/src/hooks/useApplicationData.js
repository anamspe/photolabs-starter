import { useReducer, useEffect } from "react";
import axios from "axios";

export const ACTIONS = {
  TOGGLE_FAVORITE: 'TOGGLE_FAVORITE',
  TOGGLE_MODAL_AND_PHOTO_DETAILS: 'TOGGLE_MODAL_AND_PHOTO_DETAILS',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
};

const useApplicationData = () => {

  const initialState = {
    fav: [],
    showModal: false,
    photoDetails: null,
    photoData: [],
    topicData: []
  };


  const reducer = (state, action) => {
    switch (action.type) {
      case ACTIONS.TOGGLE_FAVORITE:
        //check if photo_id is in the favorites array (state)
        const isFavorite = state.fav.includes(action.payload);
        // remove photo_id from favorites state if it is there, or add it if it is not there
        const updatedFav = isFavorite
          ? state.fav.filter((id) => id !== action.payload)
          : [...state.fav, action.payload];
        return {
          ...state,
          fav: updatedFav
        };
      case ACTIONS.TOGGLE_MODAL_AND_PHOTO_DETAILS:
        // toggle to change showModal from false to true and vice-versa and send photo details to be rendered
        return {
          ...state,
          showModal: !state.showModal,
          photoDetails: action.payload
        };
      case ACTIONS.SET_PHOTO_DATA:
        // set photos from db
        return {
          ...state,
          photoData: action.payload
        };
      case ACTIONS.SET_TOPIC_DATA:
        // set topics from db
        return {
          ...state,
          topicData: action.payload
        };
      default:
        throw new Error(
          `Tried to reduce with unsupported action type: ${action.type}`
        );
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleFavorite = (photoId) => {
    dispatch({ type: ACTIONS.TOGGLE_FAVORITE, payload: photoId });
  };

  const handleModalAndPhoto = (photo) => {
    dispatch({ type: ACTIONS.TOGGLE_MODAL_AND_PHOTO_DETAILS, payload: photo });
  };

  // useEffect to render photos and topic from db in first render only
  useEffect(() => {
    const photosData = axios.get('/api/photos');
    const topicsData = axios.get('/api/topics');

    const promises = [photosData, topicsData];
    Promise.all(promises)
      .then(res => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: res[0].data });
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: res[1].data });
      });
  }, []);

  const togglePhotosByTopic = (topic_id) => {
    axios.get(`/api/topics/photos/${topic_id}`)
    .then(res => {
      dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: res.data });
    });
  }

  return {
    ...state,
    toggleFavorite,
    handleModalAndPhoto,
    togglePhotosByTopic
  };

};

export default useApplicationData;