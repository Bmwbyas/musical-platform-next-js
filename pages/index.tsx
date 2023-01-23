import {Button} from "@mui/material";
import {MainLayout} from "@/layouts/MainLayout";

const Index = () => {
    return (
        <MainLayout>
            <div className={'center'}>
                <h1> Добро пожаловать </h1>
                <h3> Здесь собраны лучшие треки! </h3>
                <Button> Button click</Button>
            </div>
            <style>
                {`
                    .center{
                        margin-top:150px;
                        display:flex;
                        flex-direction:column;
                        align-items:center;
                }
                `
                }
            </style>
        </MainLayout>

    )
}

export default Index