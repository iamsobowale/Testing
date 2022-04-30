import topflightthreads from '../assets/images/sponsors/top_flight.jpeg'
import streamcandles from '../assets/images/sponsors/stream_candles.jpeg'
import mentalawareness from '../assets/images/sponsors/mental_awareness.jpeg'

const SponsorSection = () => {

    const sponsors = [
        {
            name: 'Top Flight Threads',
            image: topflightthreads,
            link: 'https://t.co/SxeyL65MzW',
        },
        {
            name: 'Stream Candles',
            image: streamcandles,
            link: 'https://streamcandles.com/?sca_ref=1797455.eeK3AFz5h3',
        },
        {
            name: 'Streamers for Mental Health',
            image: mentalawareness,
            link: 'https://donate.jedfoundation.org/fundraiser/3803400',
        }
    ]

    return (
        <div className="px-8 md:px-32 md:pr-48 md:mt-20">
            <h3 className=" font-bold text-2xl my-6 text-center">Our Sponsors </h3>

            <div className="flex gap-8 items-center justify-center md:text-xl ">
                {sponsors.map((sponsor, index) => <div className="leading-9 max-w-[10rem] " key={index}>
                    <a href={sponsor.link} target="_blank" rel="noopener noreferrer">
                        <img src={sponsor.image} alt={sponsor.name} className="w-full md:grayscale hover:grayscale-0 transition-all" />
                    </a>
                </div>)}

            </div>

        </div>
    )

}

export default SponsorSection;