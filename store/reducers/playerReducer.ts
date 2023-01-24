import {PlayerState} from "@/types/player";
import {HYDRATE} from "next-redux-wrapper";
import {AnyAction} from "redux";


const initialState: PlayerState = {
    active: null,
    volume: 50,
    duration: 0,
    currentTime: 0,
    pause: true
}


export const playerReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case HYDRATE:
            // Attention! This will overwrite client state! Real apps should use proper reconciliation.
            return {...state, ...action.payload};
        case "PLAY":
            return {...state, pause: true}
        case "PAUSE":
            return {...state, pause: false}
        case "SET_CURRENT_TIME":
            return {...state, currentTime: action.payload}
        case "SET_VOLUME":
            return {...state, volume: action.payload}
        case "SET_DURATION":
            return {...state, duration: action.payload}
        case "SET_ACTIVE_TRACK":
            return {...state, duration: 0, currentTime: 0, active: action.payload}
        default:
            return state;
    }

}