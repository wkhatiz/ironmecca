import Header from "../components/Header";
import MapPanel from "../components/MapPanel";
import { useLocation } from "react-router-dom";
import { getGymDetails } from "../utils/GymDetails";
import NoPage from "./NoPage";

function Gyms() {
  let location = useLocation();
  let gymId = location.state.gymId;
  let gymDetails = getGymDetails(gymId);
  if (gymDetails === undefined) {
    alert("ERROR: gym id was not found");
    return <NoPage />;
  }
  return (
    <>
      <Header />
      <main className="max-w-[1100px] mb-10 block mx-auto">
        <div>
          <h1 className="w-full text-center text-3xl md:text-4xl font-bold py-10">
            {gymDetails.name}
          </h1>
          <img
            src={gymDetails.panelImgSrc}
            className="w-full h-[300px] object-cover mb-5 lg:mb-10"
          ></img>
          <div className="w-full grid lg:grid-cols-2 lg:grid-rows-1 grid-cols-1 grid-rows-2 px-2">
            <div>
              <p className="mb-7 px-2">{gymDetails.description}</p>
              <ul className="pl-5">
                {gymDetails.features.map((featureDetails) => (
                  <li className="mb-5">
                    <img
                      src={featureDetails.imgSrc}
                      className="inline h-7 pr-2"
                    ></img>
                    <p className="inline">{featureDetails.label}</p>
                  </li>
                ))}
              </ul>
              <p>
                For a tour (or to join) you can call us on{" "}
                <span className="text-blue-700 underline cursor-pointer">
                  <a href={"tel:" + gymDetails.phone.replace(" ", "")}>
                    {gymDetails.phone}
                  </a>
                </span>
              </p>
            </div>
            <div className="mt-5 lg:mt-0">
              <MapPanel
                businessLocation={{
                  lat: gymDetails.lattitude,
                  lng: gymDetails.longitude,
                }}
                popupTxt={gymDetails.name}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Gyms;
