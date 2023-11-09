import { Link } from "react-router-dom";

function BannerText() {
  return (
    <div className="flex justify-center items-center flex-col py-10">
      <h2 className="text-2xl font-bold text-center mb-5 md:text-4xl">
        Mecca Summer Sale. Book A Class Today
      </h2>
      <Link to="schedule">
        <button className="bg-red-600 text-white p-2 rounded-md font-bold hover:brightness-50">
          Book A Class
        </button>
      </Link>
    </div>
  );
}

export default BannerText;
