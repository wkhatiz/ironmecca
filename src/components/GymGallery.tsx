import { Link } from "react-router-dom";

function GymGallery() {
  return (
    <ul className="flex items-center flex-col md:flex-row md:justify-around">
      <Link to="gyms">
        <li className="w-[90vw] mb-5 md:w-[250px] md:mb-0 lg:w-[300px] hover:brightness-50 cursor-pointer">
          <img
            src="/deamon-street-panel.jpg"
            className="w-full h-[50vw] md:h-[150px] rounded-lg brightness-50 object-cover lg:h-[200px]"
          />
          <p className="">Deamon Street</p>
        </li>
      </Link>
      <Link to="gyms">
        <li className="w-[90vw] mb-5 md:w-[250px] md:mb-0 lg:w-[300px] hover:brightness-50 cursor-pointer">
          <img
            src="/george-street-panel.jpg"
            className="w-full h-[50vw] md:h-[150px] rounded-lg brightness-50 object-cover lg:h-[200px]"
          />
          <p className="">George Street</p>
        </li>
      </Link>
      <Link to="gyms">
        <li className="w-[90vw] mb-5 md:w-[250px] md:mb-0 lg:w-[300px] hover:brightness-50 cursor-pointer">
          <img
            src="/cumberland-street-panel.jpg"
            className="w-full h-[50vw] md:h-[150px] rounded-lg brightness-50 object-cover lg:h-[200px]"
          />
          <p className="">Cumberland Street</p>
        </li>
      </Link>
    </ul>
  );
}

export default GymGallery;
