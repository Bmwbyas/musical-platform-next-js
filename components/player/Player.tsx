import React from 'react';
import {Pause, PlayArrow, VolumeUp} from "@mui/icons-material";
import {Grid, IconButton} from "@mui/material";
import s from './../../styles/Player.module.scss'
import {Itrack} from "@/types/track";
import TrackProgress from "@/components/player/trackProgress/TrackProgress";

export const Player = () => {
    const active=true
    const track:Itrack={
        name: "asdfgbbdhj",
        artist: "bbdffdb",
        text: ";bfdbdf",
        listens: 0,
        picture: "image/42a5fbcf-0923-44c0-b9b2-e538fa84ce38.png",
        audio: "audio/b1da8d89-c986-46ff-b97b-eae2434ef9a4.mp3",
        _id: "2",
        comments: [{text:'bla lba lbadklklk',_id:'1',username:'sasha'}],
    }
    return (
        <div className={s.player}>
            <IconButton onClick={e=>e.stopPropagation()}>
                {!active
                    ?<PlayArrow/>
                    :<Pause/>
                }
            </IconButton>
            <Grid container direction={"column"} style={{width:200, margin:'0 20px'}}>
                <div>{track.name}</div>
                <div style={{fontSize:12, color:'gray'}}>{track.artist}</div>
            </Grid>
            <TrackProgress left={0} right={100} onChange={(e)=>{}}/>
            <VolumeUp style={{marginLeft:"auto"}}/>
            <TrackProgress left={0} right={100} onChange={(e)=>{}}/>
        </div>
    );
};

