import BannerText from "../components/BannerText.tsx";
import Header from "../components/Header.tsx";
import BannerImage from "../components/BannerImage.tsx";
import SectionHeading from "../components/SectionHeading.tsx";
import GymGallery from "../components/GymGallery.tsx";
import ClassPanel from "../components/ClassPanel.tsx";

function Home() {
  return (
    <>
      <Header />
      <main>
        <BannerText />
        <BannerImage />
        <div className="max-w-[1300px] block mx-auto">
          <SectionHeading text="Our Amazing Gyms" />
          <GymGallery />
          <SectionHeading text="Olympic Level Classes" />
          <ul className="flex justify-center items-center flex-col">
            <li>
              <ClassPanel
                heading="Olympic Weighlifting 366/2"
                desc="Learn to Clean, Jerk and Snatch with our team of professional weightlifting coaches."
                price={14.23}
                imgPath="../../public/olympic-weightlifting.jpg"
              />
            </li>
            <li>
              <ClassPanel
                heading="Powerlifting Champions Session"
                desc="Have your Squat, Bench and Deadlift coached and corrected by IPF champions."
                price={16.74}
                imgPath="../../public/powerlifting.jpg"
              />
            </li>
            <li>
              <ClassPanel
                heading="Cross-Fit Craziness Track"
                desc="Be pushed to your limit with our 3 hour workout training many skills and disciplines."
                price={20.12}
                imgPath="../../public/crossfit.jpg"
              />
            </li>
          </ul>
          <SectionHeading text="Membership Levels"/>
          
        </div>
      </main>
    </>
  );
}

export default Home;
