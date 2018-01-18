import React from 'react';
import VideoListItem from './video_list_item'

const VideoList = (props) => {
    console.log(props,"props");
    const videoItems = props.videos.map((video) => {
        return <VideoListItem
                    onVideoSelect={props.onVideoSelect}
                    key={video.etag}
                    video={video} />
    })
    return (
        <ul className="col-md-4 list-group">
        Your search results:
            {videoItems}
        </ul>

    );
}

export default VideoList;