import { TitleSection } from "../components";
import { SponsorSection, TeamContainer } from "../containers";
import { PageLayout } from "../layouts";

const Team = () => {
    return (
        <PageLayout>
            <TitleSection title='Our Team' caption='Meet the Brains Behind Above All Else' />

            <TeamContainer />

            <SponsorSection/>

        </PageLayout>
    )
}

export default Team;