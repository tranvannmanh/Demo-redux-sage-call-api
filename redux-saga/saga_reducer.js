import { combineReducers } from 'redux';
import { } from 'redux-saga/effects';
import * as api_actions from './actions';

const initialData = {
    data:[]
};

function dataHandler(data = initialData, action) {
    // console.log(action.payload);
    switch (action.type) {
        case api_actions.FETCH_DATA:
            return {
                ...data,
                data: action.payload
            };
            break;
        default:
            return data;
            break;
    }
}

const allReducer = combineReducers({
    user_data: dataHandler,
})

export default allReducer;