import { format } from 'date-fns'

const TweetCard = () => {

    const tweet = {
        url: 'https://twitter.com/Fortnight_App',
        userHandle: '@johndoe',
        userName: 'John Doe',
        userImg: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80',
        content: 'The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.',
        date: '4/10/2022',
        time: '10:00 AM',
        medium: 'Twitter Web App',
    }

    return (
        <div className='p-2 flex flex-col gap-2 max-w-lg'>
            <div className=" flex gap-4 items-center">
                <div className="h-10 w-10 md:h-16 md:w-16 bg-cover bg-center rounded-full" style={{ backgroundImage: `url(${tweet.userImg})` }}>
                </div>
                <div>
                    <h6 className="text-sm md:text-base font-semibold">{tweet.userName}</h6>
                    <p className="text-xs md:text-sm">{tweet.userHandle}</p>
                </div>

            </div>
            <p className="text-sm md:text-base text-justify leading-6 md:leading-8">
                {tweet.content}
            </p>
            <div>
                <p className="text-xs md:text-sm text-gray-600"> {tweet.time} {format(new Date(tweet.date), 'PP')} - {tweet.medium}</p>
            </div>
        </div>
    )

}

export default TweetCard;