import ContactMeForm from "../components/ContactMeForm";
import Header from "../components/Header";
import SectionHeading from "../components/SectionHeading";
import { useLocation } from "react-router-dom";
import { getCoachDetails } from "../utils/CoachDetails";
import { useEffect, useState } from "react";
import NoPage from "./NoPage";
import ImageCarousel from "../components/ImageCarousel";

function Coaches() {
  let location = useLocation();
  let coachId = location.state.coachId;
  let coachDetails = getCoachDetails(coachId);
  if (coachDetails === undefined) {
    alert("ERROR: couch id was not found");
    return <NoPage />;
  }

  let [imageArr, setImageArr] = useState([
    coachDetails.bannerImgSrc1,
    coachDetails.bannerImgSrc2,
    coachDetails.bannerImgSrc3,
    coachDetails.bannerImgSrc4,
  ]);

  useEffect(() => {
    console.log(imageArr);
  }, [imageArr]);

  return (
    <>
      <Header />
      <main className="max-w-[1100px] mb-10 block mx-auto">
        <div
          id="coach_banner"
          className="grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 pt-7 lg:pt-14"
        >
          <ImageCarousel imageArr={imageArr} setImageArr={setImageArr} />
          <div className=" px-5 lg:px-0 order-first lg:order-none pb-5 md:pb-0">
            <h1 className="font-bold text-4xl pb-5">
              {coachDetails.firstName} {coachDetails.lastName}
            </h1>
            <p className="text-md pb-5">{coachDetails.description}</p>
            <div className="w-full h-[1px] bg-gray-300"></div>
            <ul>
              <li className="py-2">
                <p>Years of Experience: {coachDetails.experience.toString()}</p>
              </li>
              <li className="py-2">
                <p>Specialty: {coachDetails.specialty}</p>
              </li>
              <li className="py-2">
                <p>Qualifications: {coachDetails.qualification}</p>
              </li>
              <li className="py-2">
                <p>Availability: {coachDetails.availability}</p>
              </li>
            </ul>
          </div>
        </div>
        <SectionHeading text={"Contact " + coachDetails.firstName} />
        <ContactMeForm />
      </main>
    </>
  );
}

export default Coaches;
