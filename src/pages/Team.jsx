import { TitleSection } from "../components";
import { TeamContainer } from "../containers";
import { PageLayout } from "../layouts";

const Team = () => {
    return (
        <PageLayout>
            <TitleSection title='Our Team' caption='Meet the Brains Behind Above All Else' />

            <TeamContainer />

        </PageLayout>
    )
}

export default Team;