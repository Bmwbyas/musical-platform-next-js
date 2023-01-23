import React from 'react';
import {MainLayout} from "@/layouts/MainLayout";
import {Button, Grid} from '@mui/material';
import {StepWrapper} from "@/components/create/stepWrapper/StepWrapper";
import {StepForm} from "@/components/create/stepForm/StepForm";
import FileUpload from "@/components/fileUpload/FileUpload";

const Create = () => {
const [activeStep,setActiveStep]=React.useState(0)
    const [picture,setPicture]=React.useState<File|null>(null)
    const [audio,setAudio]=React.useState<File|null>(null)
    const nextStepHandler=()=>{
    setActiveStep(activeStep+1)
    }
    const prevStepHandler=()=>{
        setActiveStep(activeStep-1)
    }
    return (
        <MainLayout>
            <StepWrapper activeStep={activeStep}>
                <h1>Загрузка трека</h1>
                {activeStep===0&&<StepForm/>}

                {activeStep===1&&<FileUpload accept={'image/*'} setFile={setPicture}>
                    <Button>Загрузите изображение</Button>
                </FileUpload>}
                {activeStep===2&&<FileUpload accept={'audio/*'} setFile={setAudio}>
                    <Button>Загрузите аудио</Button>
                </FileUpload>}

            </StepWrapper>
            <Grid container justifyContent={"space-between"}>
                <Button onClick={prevStepHandler} disabled={activeStep===0}>prev</Button>
                <Button onClick={nextStepHandler} disabled={activeStep===2}> next</Button>
            </Grid>
        </MainLayout>
    );
};

export default Create;