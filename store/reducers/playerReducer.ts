import {PlayerActionType, PlayerState} from "@/types/player";
import {Itrack} from "@/types/track";
import {number} from "prop-types";

const initialState:PlayerState={
    active:null,
    volume:0,
    duration:0,
    currentTime:0,
    pause:true}


export const playerReducer=(state=initialState,action:PlayerActionType)=>{
    switch (action.type){
        case

    }
}