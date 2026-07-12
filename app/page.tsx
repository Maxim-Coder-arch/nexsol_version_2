import { dataMenu } from "@/configs-and-data/menu.data";
import HeroSection from "./sections/hero-section";
import Menu from "./share/menu";
import CasesSection from "./sections/cases";
import AboutSection from "./sections/about";
import MoreAboutSection from "./sections/more-about";
import MetaCompanyInfoSection from "./sections/meta-company-info";
import StagesOfWorkSection from "./sections/stages-of-work";
import ReviewsSection from "./sections/reviews";
import FaqSection from "./sections/faq";
import PricesSection from "./sections/prices";
import FooterSection from "./share/footer";
import RunningBanner from "./share/running-banner";

export default function Home() {
  return (
    <>
      <Menu data={dataMenu} />
      <main>
        <div className="root-content">
          <HeroSection />
          <RunningBanner />
          <CasesSection />
          <AboutSection />
          <MoreAboutSection />
          <MetaCompanyInfoSection />
          <StagesOfWorkSection />
          <PricesSection />
          <ReviewsSection />
          <FaqSection />
          <FooterSection />
        </div>
      </main>
    </>
  );
}
