import React from 'react';
import Navbar from "@/components/navbar/Navbar";
import {Container} from "@mui/material";
import {Player} from "@/components/player/Player";


type MainLayoutType = {
    children: React.ReactNode
}
export const MainLayout: React.FC<MainLayoutType> = ({children}) => {

    return (
        <>
            <Navbar/>
            <Container style={{margin:'90px 0'}}>
                {children}
            </Container>
            <Player/>
        </>
    );
};

