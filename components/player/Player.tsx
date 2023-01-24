import React, {ChangeEvent, useEffect} from 'react';
import {Pause, PlayArrow, VolumeUp} from "@mui/icons-material";
import {Grid, IconButton} from "@mui/material";
import s from './../../styles/Player.module.scss'
import {Itrack} from "@/types/track";
import TrackProgress from "@/components/player/trackProgress/TrackProgress";
import {useTypedSelector} from "@/hooks/useTypedSelector";
import {useActions} from "@/hooks/useActions";

let audio: HTMLAudioElement | null

export const Player = () => {
    const {currentTime, active, duration, volume, pause} = useTypedSelector(state => state.player)
    const {setCurrentTime, setActiveTrack, pauseTrack, playTrack, setDuration, setVolume} = useActions()

    const track: Itrack = {
        name: "asdfgbbdhj",
        artist: "bbdffdb",
        text: ";bfdbdf",
        listens: 0,
        picture: "image/42a5fbcf-0923-44c0-b9b2-e538fa84ce38.png",
        audio: "http://localhost:5000/audio/0a8ff485-7f65-483c-a973-75af53a11895.mp3",
        _id: "2",
        comments: [{text: 'bla lba lbadklklk', _id: '1', username: 'sasha'}],
    }
    useEffect(() => {
        if (!audio) {
            audio = new Audio()

        }else{
            setAudioValue()
            playTrack()
        }
    }, [active])
    const play = () => {
        if (pause) {
            pauseTrack()
            audio?.play()
        } else {
            playTrack()
            audio?.pause()
        }
    }

    const setAudioValue=()=>{
        if(audio===null){return null}
        audio.src = active.audio
        audio.volume=volume/100
        audio.onloadedmetadata=()=>{
            if(!audio){return}
            setDuration(Math.ceil(audio.duration))
        }
        audio.ontimeupdate=()=>{
            if(!audio){return}
            setCurrentTime(Math.ceil(audio.currentTime))
        }
    }

    const changeVolumeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = +e.currentTarget.value
        setVolume(value)
        if(!audio){return}
        audio.volume=value/100
    }
    const changeCurrentTime = (e: ChangeEvent<HTMLInputElement>) => {
       const value=Number(e.currentTarget.value)
        setCurrentTime(value)
        if(!audio){return}
        audio.currentTime=value
    }
    if(!active){
        return null
    }
    return (
        <div className={s.player}>
            <IconButton onClick={play}>
                {pause
                    ? <PlayArrow/>
                    : <Pause/>
                }
            </IconButton>
            <Grid container direction={"column"} style={{width: 200, margin: '0 20px'}}>
                <div>{active.name}</div>
                <div style={{fontSize: 12, color: 'gray'}}>{active.artist}</div>
            </Grid>

            <TrackProgress left={currentTime} right={duration} onChange={changeCurrentTime}/>
            <VolumeUp style={{marginLeft: "auto"}}/>
            <TrackProgress left={volume} right={100} onChange={changeVolumeHandler}/>
        </div>
    );
};

