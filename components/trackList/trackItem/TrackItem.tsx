import React from 'react';
import {Itrack} from "@/types/track";
import s from './../../../styles/TrackItem.module.scss'
import {Card, Grid, IconButton} from "@mui/material";
import {Delete, Pause, PlayArrow} from "@mui/icons-material";
import {routes} from "@/assets/routes/routes";
import {useRouter} from "next/router";
import {useActions} from "@/hooks/useActions";
import {playTrack} from "@/store/actionsCreators/players";

type TrackItemType={
    track:Itrack
    active?:boolean
}
export const TrackItem:React.FC<TrackItemType> = ({track,active=true}) => {
    const router=useRouter()
    const toCurrentTrack=()=>{
        router.push(`${routes.tracks}/${track._id}`)
    }
    const {playTrack,pauseTrack,setActiveTrack}=useActions()
    const play=(e: React.MouseEvent<HTMLButtonElement>)=>{
        e.stopPropagation()
        setActiveTrack(track)
        playTrack()
    }

    return (
        <Card onClick={toCurrentTrack} className={s.track}>
            <IconButton onClick={play}>
            {!active
                ?<PlayArrow/>
                :<Pause/>
            }

            </IconButton>
            <img width={70} height={70} src={track.picture} alt={'pic'}/>
            <Grid container direction={"column"} style={{width:200, margin:'0 20px'}}>
                <div>{track.name}</div>
                <div style={{fontSize:12, color:'gray'}}>{track.artist}</div>
            </Grid>
            {active&&<div style={{marginLeft:"auto"}}>02:42/03:22</div>}
            <IconButton onClick={e=>e.stopPropagation()} style={{marginLeft:"auto"}}><Delete/></IconButton>
        </Card>
    );
};

