import {number} from "prop-types";
import {Itrack} from "@/types/track";

export interface PlayerState {
    active:null|Itrack
    volume:number
    duration:number
    currentTime:number
    pause:boolean
}
export type PlayerActionType={}
