import onii21 from '../assets/images/team/onii21.jpeg'
import zachfirkus1 from '../assets/images/team/zachfirkus1.jpeg'
import fayden from '../assets/images/team/fayden.jpeg'
import chipmunknight from '../assets/images/team/chipmunknight.jpeg'
import { MemberCard } from '../components'


const TeamContainer = () => {

    const team = [
        {
            name: 'Onii',
            title: 'Founder',
            image: onii21,
            about: "Owner & Founder Of Above All Else",
            twitter: "Onii21",
        },
        {
            name: 'Zachfirkus',
            title: 'Co-Owner',
            image: zachfirkus1,
            about: "Well, I love adventures and being out in nature spending time with friends and family being there for people as much as I can im trying to study some sort of psychology degree and obviously gaming.",
            twitter: "Zachfirkus1",
        },
        {
            name: 'Fayden',
            title: 'Esports Manager',
            image: fayden,
            about: "My names Fayden I love helping others when the need it the most, I was a high school wrestler so I’m competitive at heart. Love CoD love God. P.S. FormaL is the FPS Jordan.",
            twitter: null,
        },
        {
            name: 'Chipmunknight',
            title: 'Streamer',
            image: chipmunknight,
            about: "I’m a non binary streamer! And a variety streamer who focuses on mental health and creating a safe space for LGBTAIQ+ and BIPOC.",
            twitter: "Chipmunknight",
        }
    ]

    return (
        <div className="px-8 md:px-32 md:pr-48 md:mt-20">
            <div className=' flex flex-col gap-16 mt-16 max-w-4xl md:m-auto'>
               {team.map((member, index) => <MemberCard key={index} member={member} />)}
            </div>
        </div>
    )

}

export default TeamContainer