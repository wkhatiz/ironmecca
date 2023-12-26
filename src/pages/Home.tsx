import BannerText from "../components/BannerText.tsx";
import Header from "../components/Header.tsx";
import BannerImage from "../components/BannerImage.tsx";
import SectionHeading from "../components/SectionHeading.tsx";
import GymGallery from "../components/GymGallery.tsx";
import ClassPanel from "../components/ClassPanel.tsx";
import MembershipPanel from "../components/MembershipPanel.tsx";
import CoachGallery from "../components/CoachGallery.tsx";
import MerchGallery from "../components/MerchGallery.tsx";
import ContactMeForm from "../components/ContactMeForm.tsx";
import { coachDetailsArr } from "../utils/CoachDetails.tsx";
import { gymDetailsArr } from "../utils/GymDetails.tsx";
import { merchArray } from "../utils/MerchDetails.tsx";
import { tierArray } from "../utils/TierDetails.tsx";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Header />
      <main className="max-w-[1100px] mb-10 block mx-auto">
        <BannerText />
        <BannerImage />
        <div>
          <SectionHeading text="Our Amazing Gyms" />
          <GymGallery gymDetailsArr={gymDetailsArr} />
          <SectionHeading text="Olympic Level Classes" />
          <ul className="flex items-center flex-col">
            <li className="px-5 w-full mb-5 md:flex md:items-center md:justify-center">
              <ClassPanel
                heading="Olympic Weighlifting 366/2"
                desc="Learn to Clean, Jerk and Snatch with our team of professional weightlifting coaches."
                price={14.23}
                imgPath="/olympic-weightlifting.jpg"
              />
            </li>
            <li className="px-5 w-full mb-5 md:flex md:items-center md:justify-center">
              <ClassPanel
                heading="Powerlifting Champions Session"
                desc="Have your Squat, Bench and Deadlift coached and corrected by IPF champions."
                price={16.74}
                imgPath="/powerlifting.jpg"
              />
            </li>
            <li className="px-5 w-full md:flex md:items-center md:justify-center">
              <ClassPanel
                heading="Cross-Fit Craziness Track"
                desc="Be pushed to your limit with our 3 hour workout training many skills and disciplines."
                price={20.12}
                imgPath="/crossfit.jpg"
              />
            </li>
          </ul>
          <SectionHeading text="Membership Levels" />
          <ul className="flex items-center flex-col ">
            {tierArray.map((tier, index) => (
              <li key={index} className="w-[90vw] mb-5 lg:w-[90%]">
                <Link key={index} to="product" state={{ itemId: tier.id }}>
                  <MembershipPanel
                    key={index}
                    id={tier.id}
                    name={tier.name}
                    price={tier.price}
                    featuresList={tier.featuresList}
                  />
                </Link>
              </li>
            ))}
          </ul>
          <SectionHeading text="Coaches and Trainers" />
          <CoachGallery coachDetails={coachDetailsArr} />
          <SectionHeading text="Merchandise" />
          <MerchGallery merchList={merchArray} />
          <SectionHeading text="Contact Us" />
          <ContactMeForm />
        </div>
      </main>
    </>
  );
}

export default Home;
