import {Itrack} from "@/types/track";
import {
    pauseTrack,
    playTrack,
    setActiveTrack,
    setCurrentTime,
    setDuration,
    setVolume
} from "@/store/actionsCreators/players";
import {HYDRATE} from "next-redux-wrapper";

export interface PlayerState {
    active:null|Itrack
    volume:number
    duration:number
    currentTime:number
    pause:boolean
}
export type PlayersActionType= ReturnType<typeof playTrack>|
    ReturnType<typeof pauseTrack>|
    ReturnType<typeof setDuration>|
    ReturnType<typeof setVolume>|
    ReturnType<typeof setCurrentTime>|
    ReturnType<typeof setActiveTrack>|
    typeof HYDRATE
