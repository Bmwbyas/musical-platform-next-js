import React from 'react';

type FileUploadType = {
    children: React.ReactNode

    setFile:  React.Dispatch<React.SetStateAction<File|null>>
    accept: string
}
const FileUpload: React.FC<FileUploadType> = ({children,  setFile,accept}) => {
    const ref =React.useRef<HTMLInputElement|null>(null)

    const onClickRef=()=>{
        ref.current?.click()
    }
    const onChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        if(e.target.files) setFile(e.target.files[0])
    }
    return (
        <div onClick={onClickRef}>

            <input type={"file"} accept={accept} style={{display:"none"}} ref={ref}/>
            {children}
        </div>
    );
};

export default FileUpload;