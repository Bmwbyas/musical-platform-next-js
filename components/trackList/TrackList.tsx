import React from 'react';
import {Itrack} from "@/types/track";
import {Box, Grid} from "@mui/material";
import {TrackItem} from "@/components/trackList/trackItem/TrackItem";

type TrackListType = {
    tracks: Itrack[]
}
export const TrackList: React.FC<TrackListType> = ({tracks}) => {
    return (
        <Grid container direction={'column'}>
            <Box p={2}>
                {tracks.map(t=><TrackItem key={t._id} track={t}/>)}

            </Box>
        </Grid>
    );
};

