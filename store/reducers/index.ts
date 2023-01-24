import {combineReducers} from "redux";
import {playerReducer} from "@/store/reducers/playerReducer";
import {HYDRATE} from "next-redux-wrapper";
import {PlayersActionType} from "@/types/player";


export const rootReducer=combineReducers({
    player:playerReducer
})
export type RootStateType=ReturnType<typeof rootReducer>
export type RootActionsType=PlayersActionType|typeof HYDRATE