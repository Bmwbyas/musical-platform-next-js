import React from 'react';
import {Card, Container, Grid, Step, StepLabel, Stepper} from "@mui/material";

type StepWrapperType={
    activeStep:number
    children:React.ReactNode
}
const steps=['Информация о треке', "Загрузите обложку", "Загрузите сам трек"]
export const StepWrapper:React.FC<StepWrapperType> = ({activeStep,children}) => {

    return (
        <Container>
            <Stepper activeStep={activeStep}>
                {steps.map((step,index)=>
                <Step
                    key={index}
                    completed={activeStep>index}
                >
                    <StepLabel>{step}</StepLabel>
                </Step>)}
            </Stepper>
            <Grid container justifyContent={'center'} style={{margin:'70px 0', height:270}}>
                <Card style={{width:600}}>
                    {children}
                </Card>
            </Grid>
        </Container>
    );
};
