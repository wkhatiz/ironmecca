import { Link } from "react-router-dom";

type CoachItemProp = {
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
  };
};

function CoachItem(props: CoachItemProp) {
  const { coachDetails } = props;
  return (
    <Link to="coaches" state={{ coachId: coachDetails.id }}>
      <img
        src={coachDetails.profileImgSrc}
        className="w-[100px] h-[100px] rounded-[50px] inline-block md:w-[150px] md:h-[150px] md:rounded-[75px] md:mb-2"
      ></img>
      <div className="inline-block pl-3">
        <h3 className="font-bold text-lg md:text-center">
          {coachDetails.firstName + " " + coachDetails.lastName}
        </h3>
        <p className="md:text-center">{coachDetails.title}</p>
      </div>
    </Link>
  );
}

export default CoachItem;
