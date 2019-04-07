import { FETCH_WEATHER } from '../actions/index';
export default function (state = [], action) { 
    // understand how reduxpromise middleware works:
    //      our action coming into the reducer now has a new action with a response:
    //      console.log("Action Received:", action);
    switch (action.type) {
        case FETCH_WEATHER: 
            return state.concat( action.payload.data );
            // es6 way of .concat : 
            // return [ action.payload.data, ...state];
    }
    return state;
 }