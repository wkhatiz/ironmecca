import Header from "../components/Header";
import MapPanel from "../components/MapPanel";

function Gyms() {
  return (
    <>
      <Header />
      <main className="max-w-[1100px] mb-10 block mx-auto">
        <div>
          <h1 className="w-full text-center text-4xl font-bold py-10">
            Iron Mecca York Street
          </h1>
          <img
            src="george-street-panel.jpg"
            className="w-full h-[300px] object-cover mb-10"
          ></img>
          <div className="w-full grid grid-cols-2 grid-rows-1">
            <div>
              <p className="mb-7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                <br />
                <br />
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>
              <ul className="pl-5">
                <li className="mb-5">
                  <img src="clock-icon.png" className="inline h-7 pr-2"></img>

                  <p className="inline">24 Hour Access</p>
                </li>
                <li className="mb-5">
                  <img src="swim-icon.png" className="inline h-7 pr-2"></img>

                  <p className="inline">Olympic Size Pool</p>
                </li>
                <li className="mb-5">
                  <img src="spa-icon.png" className="inline h-7 pr-2"></img>

                  <p className="inline">Spa & Sauna</p>
                </li>
              </ul>
              <p>
                For a tour (or to join) you can call us on{" "}
                <span className="text-blue-700 underline cursor-pointer">
                  <a href="tel:1800975707">1800 975 707</a>
                </span>
              </p>
            </div>
            <div>
              <MapPanel businessLocation={{ lat: 51.505, lng: -0.09 }} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Gyms;
