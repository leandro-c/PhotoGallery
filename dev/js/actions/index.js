
import axios from "axios"

export const getPhotos = (start) => {
	  return function(dispatch) {
	  dispatch({type: "FETCH_PHOTOS_PENDING", payload: []})
	  axios.get("https://jsonplaceholder.typicode.com/photos"
		).then((response) => {
			dispatch({type: "FETCH_PHOTOS_FULFILLED", payload: response.data})
		}).catch((err) => {
			dispatch({type: "FETCH_PHOTOS_REJECTED", payload: err})
		})
  }
};
