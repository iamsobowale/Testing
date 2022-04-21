import { AiOutlinePlayCircle } from 'react-icons/ai'

const VideoCard = ({ video }) => {

    return (
        <a href={video.url} target='_blank' rel="noreferrer" className="rounded-lg bg-black text-white overflow-hidden flex flex-col md:flex-1 min-h-[12rem] md:min-h-[15rem]">
            <div style={{ backgroundImage: `url(${video.thumbnail})` }} className=" rounded-lg w-full flex-1 bg-cover bg-center relative">
                <div className="absolute bg-[#0000006b] w-full h-full overflow-hidden flex justify-center items-center">
                    <AiOutlinePlayCircle size={50} />
                </div>
            </div>
            <div className='p-2'>
                <h1>{video.title}</h1>
            </div>
        </a>
    )

}

export default VideoCard;