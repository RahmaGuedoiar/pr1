import React from 'react'
import v1 from '../Assets/v1.mp4'


const Video = () => {
    return (
        <div>
            
            <video controls width="250">
                <source src={v1} type="video/webm" />

                <source src={v1} type="video/mp4" />
                </video>
        </div>
    )
}

export default Video