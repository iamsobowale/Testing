import { TweetCard } from "../components";

const TwitterSection = () => {

    const tweets = [
        {
            url: 'https://twitter.com/Fortnight_App',
            userHandle: '@johndoe',
            userName: 'John Doe',
            userImg: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80',
            content: 'The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.',
            date: '10/4/2022',
            time: '10:00 AM',
            medium: 'Twitter Web App',
        },
        {
            url: 'https://twitter.com/Fortnight_App',
            userHandle: '@johndoe',
            userName: 'John Doe',
            userImg: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80',
            content: 'The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.',
            date: '10/4/2022',
            time: '10:00 AM',
            medium: 'Twitter Web App',
        },
        {
            url: 'https://twitter.com/Fortnight_App',
            userHandle: '@johndoe',
            userName: 'John Doe',
            userImg: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80',
            content: 'The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.',
            date: '10/4/2022',
            time: '10:00 AM',
            medium: 'Twitter Web App',
        },
        {
            url: 'https://twitter.com/Fortnight_App',
            userHandle: '@johndoe',
            userName: 'John Doe',
            userImg: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80',
            content: 'The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.',
            date: '10/4/2022',
            time: '10:00 AM',
            medium: 'Twitter Web App',
        },
    ]

    return (
        <div className="p-4 md:px-32 md:py-20">
            <h1 className="text-center text-3xl font-bold mb-8">TWITTER </h1>
            <div className="flex  gap-6 md:gap-12 flex-wrap justify-center md:justify-start ">
                {tweets.map((tweet, index) => <TweetCard tweet={tweet} key={index} />)}
            </div>
        </div>
    )

}

export default TwitterSection;