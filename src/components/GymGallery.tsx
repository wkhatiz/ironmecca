import GymItem from "./GymItem";

type gymGalleryProps = {
  gymDetailsArr: {
    id: string;
    name: string;
    panelImgSrc: string;
    description: string;
    features: { imgSrc: string; label: string }[];
    phone: string;
    lattitude: number;
    longitude: number;
  }[];
};

function GymGallery(props: gymGalleryProps) {
  let { gymDetailsArr } = props;
  return (
    <ul className="flex items-center flex-col md:flex-row md:justify-around">
      {gymDetailsArr.map((gymDetails, index) => (
        <GymItem key={index} gymDetails={gymDetails} />
      ))}
    </ul>
  );
}

export default GymGallery;
