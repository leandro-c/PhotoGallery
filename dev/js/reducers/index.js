import {combineReducers} from 'redux';
import UsersReducer from './reducer-users';

const allReducers = combineReducers({
    users: UsersReducer
});

export default allReducers
