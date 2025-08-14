import { TopNavBar } from "./components/top-nav";
import Hero from "./hero";
import Products from "./products.tsx";
import OurPartners from "./our-partners.tsx";
import WhyGiddaa from "./why-giddaa.tsx";
import PeopleTalk from "./people-talk.tsx";
import KnowMore from "./know-more.tsx";
import GetStarted from "./get-standard.tsx";
import Footer from "./components/footer.tsx";

const HomePage = () => {
  return (
    <div>
      <TopNavBar />
      <div>
        <Hero />
        <Products />
        <OurPartners />
        <WhyGiddaa />
        <PeopleTalk />
        <KnowMore />
        <GetStarted />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
