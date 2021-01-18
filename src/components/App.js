import React, { useState, useEffect } from 'react';
import SearBar from './SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';
import useVodeos from '../hooks/useVideos';

const App = () => {

const [selectedVideo, setSelectedVideo] = useState(null);

 const [videos, search] =  useVodeos('kids stories');

 useEffect(() => {
    setSelectedVideo(videos[0]);
 }, [videos]);

return(
    <div className="ui container">
        <SearBar onSearch={search}/>
        {/* Wiring VideoDetail component in App */}
        <div className="ui grid">
        <div className="ui row">
        <div className="eleven wide column">
        <VideoDetail video={selectedVideo} />
        </div>
        {/* Wiring VideoList component in App */}
        <div className="five wide column">
        <VideoList 
        videos={videos} 
        onVideoSelect={setSelectedVideo} 
            />
            </div>
            </div>
            </div>
        </div>
)

};

export default App;