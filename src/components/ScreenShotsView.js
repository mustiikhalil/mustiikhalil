import React from 'react'
// import { Player } from 'video-react'

import ReactPlayer from 'react-player/lazy'

const PlaceHolderView = (css) => {
    return <div className={css}></div>
}

const ScreenshotsView = (props) => {

    let screenshotsCSS = props.isMobile ? "screenshot-small" : "screenshot-normal";
    if (props.obj.mediaLength() === 0 ) { 
        return PlaceHolderView(screenshotsCSS) 
    }
    let obj = props.obj.media(0)
    if (obj.type() === 1) {
        return (
            <VideoPlayer url={obj.url()} isMobile={props.isMobile} />
        )
    }
    return null
}

const VideoPlayer = (props) => {
    let screenshotsCSS = props.isMobile ? "screenshot-small" : "screenshot-normal";
    return (
        <div className={screenshotsCSS}>
            <ReactPlayer         
            width='100%'
            height='100%'
            url={props.url}
            controls={true}
            />
        </div>
    )
}

export default ScreenshotsView;