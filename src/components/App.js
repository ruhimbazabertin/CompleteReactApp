import React, { useState, useEffect } from 'react';
import SearBar from './SearchBar';
import Youtube from './apis/youtube';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';

const App = () => {

const [videos, setVideos] = useState([]);
const [selectedVideo, setSelectedVideo] = useState(null);

useEffect(() => {

    onVideoSearch('kids stories');

}, []);

const onVideoSearch = async (term) => {
    const response = await Youtube.get('/search',{
        params: {
            q: term,
        }
    });
      setVideos(response.data.items);
        setSelectedVideo(response.data.items[0]);
      };


return(
    <div className="ui container">
        <SearBar onSearch={onVideoSearch}/>
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