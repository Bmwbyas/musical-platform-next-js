import React, {ChangeEvent} from 'react';
type TrackProgressType={
    left:number
    right:number
    onChange:(e:ChangeEvent<HTMLInputElement>)=>void
}

const TrackProgress:React.FC<TrackProgressType> = ({left,onChange,right}) => {
    return (
        <div style={{display:"flex"}}>
            <input type="range" min={0} value={left} max={right} onChange={onChange}/>
            <div>{left}/{right}</div>
        </div>
    );
};

export default TrackProgress;