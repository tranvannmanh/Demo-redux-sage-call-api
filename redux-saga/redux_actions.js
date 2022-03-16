import * as api_actions from './actions';

export function FETCH_USER_DATA(data) {
    console.log(data);
    return {
        type: api_actions.FETCH_DATA,
        payload: data
    }
}

export function POST_USER_DATA() {
    return {
        type: api_actions.POST_USER_DATA,
    }
}

export function DELETE_USER_DATA_ID(data_id) {
    return {
        type: api_actions.DELETE_USER_DATA,
        payload: data_id
    }
}

export function UPDATE_USER_DATA_ID(data,data_id) {
    return {
        type: api_actions.UPDATE_USER_DATA_ID,
        payload: {
            ...data,
            id: data_id
        }
    }
}