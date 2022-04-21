import { Button, VideoCard } from "../components";
import { useEffect } from "react";
import { useState } from "react";

const VideoSection = () => {

    const maxResults = 3;

    const [videos, setVideos] = useState([]);

    useEffect(() => {

        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${process.env.REACT_APP_CHANNELID}&maxResults=${maxResults}&order=date&key=${process.env.REACT_APP_API_KEY}`)
            .then(res => res.json())
            .then(res => {
                const newVideos = res.items.map(item => (
                    {
                        url: `https://www.youtube.com/embed/${item.id.videoId}`,
                        thumbnail: item.snippet.thumbnails.high.url,
                        title: item.snippet.title
                    }
                ))
                setVideos(newVideos)
            })

    }, [])

    return (
        <div className="video-section md:flex bg-orange-500 p-8 px-12 md:py-20 md:px-32">
            <div className="md:flex md:flex-col md:justify-around md:mr-8 ">
                <h1 className=" text-white text-2xl md:text-3xl font-extrabold md:leading-[2.5rem] break-words mb-4 md:mb-0">Recent <br /> Videos</h1>
                <a href={`https://www.youtube.com/channel/${process.env.REACT_APP_CHANNELID}`} target='_blank' rel="noreferrer" className="hidden md:flex  mt-6">
                    <Button text='VIEW MORE' />
                </a>
            </div>
            <div className="flex flex-col md:flex-row md:w-full gap-6">
                {videos.map((video, index) => <VideoCard video={video} key={index} />)}
            </div>
            <a href={`https://www.youtube.com/channel/${process.env.REACT_APP_CHANNELID}`} target='_blank' rel="noreferrer" className="flex md:hidden justify-center mt-6">
                <Button text='VIEW MORE' />
            </a>


        </div>
    )

}

export default VideoSection;