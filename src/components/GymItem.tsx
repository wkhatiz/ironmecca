import { Link } from "react-router-dom";

type gymItemProps = {
  gymDetails: {
    id: string;
    name: string;
    panelImgSrc: string;
    description: string;
    features: { imgSrc: string; label: string }[];
    phone: string;
    lattitude: number;
    longitude: number;
  };
};

function GymItem(props: gymItemProps) {
  let { gymDetails } = props;
  return (
    <Link to="gyms" state={{ gymId: gymDetails.id }}>
      <li className="w-[90vw] mb-5 md:w-[250px] md:mb-0 lg:w-[300px] hover:brightness-50 cursor-pointer">
        <img
          src={gymDetails.panelImgSrc}
          className="w-full h-[50vw] md:h-[150px] rounded-lg brightness-50 object-cover lg:h-[200px]"
        />
        <p className="">{gymDetails.name}</p>
      </li>
    </Link>
  );
}

export default GymItem;
