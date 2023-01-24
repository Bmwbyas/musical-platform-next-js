import {useRouter} from "next/router";
import {Box, Button, Card, Grid} from "@mui/material";
import {MainLayout} from "@/layouts/MainLayout";
import React from "react";
import {Itrack} from "@/types/track";
import {TrackList} from "@/components/trackList/TrackList";


const Tracks = () => {
    const router=useRouter()
    const redirectToCreateTrack=()=>{
        router.push('/tracks/create')
    }

    const tracks:Itrack[]=[{
        name: "dfgh",
        artist: "sadadsdasad",
        text: ";sdssdsdsdsf",
        listens: 0,
        picture: "image/42a5fbcf-0923-44c0-b9b2-e538fa84ce38.png",
        audio: "audio/b1da8d89-c986-46ff-b97b-eae2434ef9a4.mp3",
        comments: [{ username: "2 comment",
            text: "striblab bla bal ng",
            _id: "63ce2b4768edce334586334f",}],
        _id: "1",
    },
        {
            name: "asdfgbbdhj",
            artist: "bbdffdb",
            text: ";bfdbdf",
            listens: 0,
            picture: "image/42a5fbcf-0923-44c0-b9b2-e538fa84ce38.png",
            audio: "audio/b1da8d89-c986-46ff-b97b-eae2434ef9a4.mp3",
            comments: [],
            _id: "63ce2a9d68edce334586334c",
        },
        {
            name: "asdfgbbdhj",
            artist: "bbdffdb",
            text: ";bfdbdf",
            listens: 0,
            picture: "image/42a5fbcf-0923-44c0-b9b2-e538fa84ce38.png",
            audio: "audio/b1da8d89-c986-46ff-b97b-eae2434ef9a4.mp3",
            comments: [],
            _id: "2",
        }]
    return (
        <MainLayout>
            <Grid container justifyContent={'center'}>
                <Card style={{width: 900}}>
                    <Box p={3}>
                        <Grid container justifyContent={"space-between"}>
                            <h1> Список треков</h1>
                            <Button onClick={redirectToCreateTrack}> Загрузить</Button>
                            <TrackList tracks={tracks}/>
                        </Grid>
                    </Box>
                </Card>
            </Grid>
        </MainLayout>
    );
};

export default Tracks;