import {combineReducers} from 'redux';
import PhotosReducer from './reducer-photos';

const allReducers = combineReducers({
    photos: PhotosReducer
});

export default allReducers
