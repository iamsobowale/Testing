import { TitleSection } from "../components";
import { PageLayout } from "../layouts";

const About = () => {

    const points = [
        {
            title: "Mental Health",
            caption: 'we are trying to build a foundation on expressing mental health & bringing more light to the subject. We are working day by day to create a safe environment for gamers & anyone else for that matter, to escape their personal lives & come have fun around friendly & passionate people. We also push out important hotlines, websites, & motivation quotes. We want to try to be the center of Mental Health In Gaming.'
        },
        {
            title: "Gaming",
            caption: 'we plan on housing multiples content creators & esports teams. We want to be able to support teams & players in various esports as we continue to grow & expand. {"\n"} Our end goal is to do everything we can to help players achieve their dreams & aspirations. \n For example, We have helped send: "\n" * 3 teams to Minnesota for the amateur LAN event. \n * 1 player to Maryland for a Super Smash Bros LAN event'
        },
        {
            title: "Apparel",
            caption: 'our goal is to create awesome clothing that can be seen just out & about & attract peoples attention to which our logo is a popular clothing brand. We have a base store, & soon, we will be having limited time drops - including times around: Christmas, Halloween, Valentines, etc. & to go even further, having clothing drops around important months like Suicide Prevention, Breast cancer awareness, Black history month, etc., where all proceeds will be donated to charity'
        }
    ]

    return (
        <PageLayout>
            <TitleSection title='About Us' caption='Welcome To Above All Else' />

            <div className="px-8 md:px-32 md:pr-48 md:mt-20">
                <h3 className=" font-bold text-2xl my-6">We have 3 important branches to our brand</h3>
                <ol className=" list-none flex flex-col gap-8 md:text-xl ">
                    {points.map((point, index) => <li className=" leading-9 md:leading-[3rem]" key={index}>
                        <span className=" font-bold">{`${index + 1} . ${point.title} - `}</span>{point.caption}
                    </li>)}
                </ol>
            </div>

        </PageLayout>
    )

}
export default About;