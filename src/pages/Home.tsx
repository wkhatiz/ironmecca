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

function Home() {
  return (
    <>
      <Header />
      <main className="max-w-[1100px] mb-10 block mx-auto">
        <BannerText />
        <BannerImage />
        <div>
          <SectionHeading text="Our Amazing Gyms" />
          <GymGallery />
          <SectionHeading text="Olympic Level Classes" />
          <ul className="flex items-center flex-col">
            <li className="w-full mb-5 md:flex md:items-center md:justify-center">
              <ClassPanel
                heading="Olympic Weighlifting 366/2"
                desc="Learn to Clean, Jerk and Snatch with our team of professional weightlifting coaches."
                price={14.23}
                imgPath="/olympic-weightlifting.jpg"
              />
            </li>
            <li className="w-full mb-5 md:flex md:items-center md:justify-center">
              <ClassPanel
                heading="Powerlifting Champions Session"
                desc="Have your Squat, Bench and Deadlift coached and corrected by IPF champions."
                price={16.74}
                imgPath="/powerlifting.jpg"
              />
            </li>
            <li className="w-full md:flex md:items-center md:justify-center">
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
            <li className="w-[90vw] mb-5 lg:w-[90%]">
              <MembershipPanel
                name="Tier A"
                price={25.34}
                featuresList={[
                  { name: "Gym Access", included: true },
                  { name: "24/7 Consulting", included: true },
                  { name: "VIP Lounge", included: false },
                  { name: "Physiotherapy", included: false },
                  { name: "Sauna", included: false },
                ]}
              />
            </li>
            <li className="w-[90vw] mb-5 lg:w-[90%]">
              <MembershipPanel
                name="Tier B"
                price={30.29}
                featuresList={[
                  { name: "Gym Access", included: true },
                  { name: "24/7 Consulting", included: true },
                  { name: "VIP Lounge", included: false },
                  { name: "Physiotherapy", included: true },
                  { name: "Sauna", included: true },
                ]}
              />
            </li>
            <li className="w-[90vw] mb-5 lg:w-[90%]">
              <MembershipPanel
                name="Tier C"
                price={100}
                featuresList={[
                  { name: "Gym Access", included: true },
                  { name: "24/7 Consulting", included: true },
                  { name: "VIP Lounge", included: true },
                  { name: "Physiotherapy", included: true },
                  { name: "Sauna", included: true },
                ]}
              />
            </li>
          </ul>
          <SectionHeading text="Coaches and Trainers" />
          <CoachGallery
            coachList={[
              {
                name: "David Clark",
                desc: "Worlds Strongest Man",
                imgPath: "/david-clark.jpg",
              },
              {
                name: "Dominic Doe",
                desc: "Powerlifting Superstar",
                imgPath: "/dominic-doe.jpg",
              },
              {
                name: "Emilia Smith",
                desc: "7-time Mrs Olympia",
                imgPath: "/emilia-smith.jpg",
              },
              {
                name: "John Smith",
                desc: "Fitness Icon",
                imgPath: "/john-smith.jpg",
              },
              {
                name: "Sarah Peters",
                desc: "Crossfit Expert",
                imgPath: "/sarah-peters.jpg",
              },
            ]}
          />
          <SectionHeading text="Merchandise" />
          <MerchGallery
            merchList={[
              {
                name: "Gym Towel",
                desc: "Microfibre with integrated storage for your things",
                price: 20.23,
                imgPath: "/towel.jpg",
              },
              {
                name: "Shaker Cup",
                desc: "All your nutrients, shakable and ready to go",
                price: 10.45,
                imgPath: "/cup.jpg",
              },
              {
                name: "Hoodie",
                desc: "The one and only, pump cover for the legends",
                price: 50.76,
                imgPath: "/hoodie.jpg",
              },
              {
                name: "Backpack",
                desc: "Plenty of space for the towel, cop, hoodie and gear",
                price: 100.23,
                imgPath: "/backpack.jpg",
              },
            ]}
          />
          <SectionHeading text="Contact Us" />
          <ContactMeForm />
        </div>
      </main>
    </>
  );
}

export default Home;
