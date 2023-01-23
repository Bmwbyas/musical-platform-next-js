import React from 'react';
import {Itrack} from "@/types/track";
import s from './../../../styles/TrackItem.module.scss'
import {Card, Grid, IconButton} from "@mui/material";
import {Delete, Pause, PlayArrow} from "@mui/icons-material";
import {routes} from "@/assets/routes/routes";
import {useRouter} from "next/router";

type TrackItemType={
    t:Itrack
    active?:boolean
}
export const TrackItem:React.FC<TrackItemType> = ({t,active=true}) => {
    const router=useRouter()
    const toCurrentTrack=()=>{
        router.push(`${routes.tracks}/${t._id}`)
    }

    return (
        <Card onClick={toCurrentTrack} className={s.track}>
            <IconButton onClick={e=>e.stopPropagation()}>
            {!active
                ?<PlayArrow/>
                :<Pause/>
            }

            </IconButton>
            <img width={70} height={70} src={t.picture} alt={'pic'}/>
            <Grid container direction={"column"} style={{width:200, margin:'0 20px'}}>
                <div>{t.name}</div>
                <div style={{fontSize:12, color:'gray'}}>{t.artist}</div>
            </Grid>
            {active&&<div style={{marginLeft:"auto"}}>02:42/03:22</div>}
            <IconButton onClick={e=>e.stopPropagation()} style={{marginLeft:"auto"}}><Delete/></IconButton>
        </Card>
    );
};

