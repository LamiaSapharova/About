import "./about.css";
import ImgCover from "../companents/ImgCover";
import OurStory from "../companents/OurStory";
import Fashion from "../companents/Fasion";
import WhoWeAre from "../companents/WhoWeAre";
import Section5 from "../companents/Section5";
import ImagesSection from "../companents/ImagesSection";
import Reviews from "../companents/Reviews";
import Shopper from "../companents/Shopper";

function About() {
  return (
    <div className="about">
      <ImgCover />
      <OurStory />
      <Fashion />
      <WhoWeAre />
      <Section5 />
      <ImagesSection />
      <Reviews />
      <Shopper />
    </div>
  );
}

export default About;
