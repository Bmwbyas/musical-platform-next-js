import {Itrack} from "@/types/track";

export const playTrack=()=>{
    return{type:'PLAY'} as const
}
export const pauseTrack=()=>{
    return{type:'PAUSE'} as const
}
export const setDuration=(payload:number)=>{
    return{type:'SET_DURATION',payload} as const
}
export const setVolume=(payload:number)=>{
    return{type:'SET_VOLUME',payload} as const
}
export const setCurrentTime=(payload:number)=>{
    return{type:'SET_CURRENT_TIME',payload} as const
}
export const setActiveTrack=(payload:Itrack)=>{
    return{type:'SET_ACTIVE_TRACK',payload} as const
}

