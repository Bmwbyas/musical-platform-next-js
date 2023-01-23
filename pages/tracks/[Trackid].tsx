import React from 'react';
import {Itrack} from "@/types/track";
import {MainLayout} from "@/layouts/MainLayout";
import {Button, TextField,Grid} from "@mui/material";
import {routes} from "@/assets/routes/routes";
import {useRouter} from "next/router";

const Track = () => {
    const router=useRouter()
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

    const backToTracks=()=>{
        router.push(routes.tracks)
    }
    return (
        <MainLayout>
            <Button onClick={backToTracks}
                    variant={'outlined'}
                    style={{fontSize:32}}
            >
                К списку
            </Button>
           <Grid container style={{margin:'20px 0'}}>
               <img src={track.picture} width={200} height={200} alt="image"/>
               <div>
                   <h1>Название трека - {track.name}</h1>
                   <h1>Исполнитель - {track.artist}</h1>
                   <h1>Прослушиваний - {track.listens}</h1>
               </div>
           </Grid>
            <h1>Слова к треку</h1>
            <p>{track.text}</p>
            <h1>Комментарий</h1>
            <Grid container>
                <TextField label='Ваше имя' fullWidth />
                <TextField label='коментарий' multiline={true} rows={4} />
                <Button>Отправить</Button>
            </Grid>
            <div>
                {track.comments.map(c=>
                <div>
                    <div>Автор - {c.username}</div>
                    <div>Комментарий - {c.text}</div>
                </div>)}
            </div>
        </MainLayout>
    );
};

export default Track;