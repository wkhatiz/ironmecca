import MerchItem from "./MerchItem";
import { Link } from "react-router-dom";

type MerchGalleryProps = {
  merchList: {
    id: string;
    name: string;
    desc: string;
    price: number;
    imgPath: string;
  }[];
};

function CoachGallery(props: MerchGalleryProps) {
  const { merchList } = props;
  return (
    <ul className="flex items-center flex-col md:flex-row md:justify-around">
      {merchList.map((merchDetails, index) => (
        <Link to="product" state={{ itemId: merchDetails.id }}>
          <li
            key={index}
            className="w-[90vw] flex items-center md:flex-col md:w-[200px] md:h-[420px] md:bg-transparent md:mb-0 mb-5 last:mb-0 bg-gray-200 p-3 rounded-md hover:brightness-75 hover:bg-gray-100 cursor-pointer"
          >
            <MerchItem merchDetails={merchDetails} />
          </li>
        </Link>
      ))}
    </ul>
  );
}

export default CoachGallery;
