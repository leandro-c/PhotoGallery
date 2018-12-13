
var initialState = {
  fetched: false,
  data: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'FETCH_PHOTOS_PENDING':
      return {
        ...state, 
        fetching: true, 
        fetched: false
      }
    case 'FETCH_PHOTOS_FULFILLED':
      return {
        ...state, 
        fetching: false, 
        fetched: true, 
        data: action.payload
      }
    case 'FETCH_PHOTOS_REJECTED':
      return {
        ...state, 
        fetching: false, 
        fetched: false,
        data: action.payload 
      }
      break;
  }
  return state;
}
