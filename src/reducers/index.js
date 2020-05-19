import test from './login';
import { combineReducers } from 'redux';

const allReducer = combineReducers({
    test: test
});

export default allReducer;