import React from 'react';
import {Grid, TextField} from "@mui/material";

export const StepForm = () => {
    return (
        <Grid  container direction={"column"} style={{padding:20}} >
            <TextField style={{margin:10}} label={"Название трека"}/>
            <TextField style={{margin:10}} label={"Имя исполнителя"}/>
            <TextField style={{margin:10}} label={"Слова к тексту"} multiline rows={4}/>

        </Grid>
    );
};

