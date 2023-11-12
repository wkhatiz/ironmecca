import CoachItem from "./CoachItem";

type CoachGalleryProps = {
  coachDetails: {
    id: string;
    firstName: string;
    lastName: string;
    title: string;
    description: string;
    experience: number;
    specialty: string;
    qualification: string;
    availability: string;
    profileImgSrc: string;
    bannerImgSrc1: string;
    bannerImgSrc2: string;
    bannerImgSrc3: string;
    bannerImgSrc4: string;
  }[];
};

function CoachGallery(props: CoachGalleryProps) {
  const { coachDetails } = props;
  return (
    <ul className="flex items-center flex-col md:flex-row md:justify-around">
      {coachDetails.map((coachDetails, index) => (
        <li
          key={index}
          className="w-[90vw] flex items-center md:flex-col md:w-[160px] md:h-[260px] md:mb-0 md:bg-transparent md:p-2 mb-5 last:mb-0 bg-gray-200 p-3 rounded-md hover:brightness-75 hover:bg-gray-100 cursor-pointer"
        >
          <CoachItem coachDetails={coachDetails} />
        </li>
      ))}
    </ul>
  );
}

export default CoachGallery;
