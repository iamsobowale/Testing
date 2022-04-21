import { AboutSection, ContactSection, CtaContainer, StoreSection, TwitterSection } from "../containers";
import { PageLayout } from "../layouts";

const Home = () => {
    return (
        <PageLayout>
            <CtaContainer />
            <StoreSection />
            {/* <VideoSection /> */}
            <TwitterSection />
            <AboutSection />
            <ContactSection />
        </PageLayout>
    )

}

export default Home;