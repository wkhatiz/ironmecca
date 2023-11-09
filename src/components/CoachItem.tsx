import { Link } from "react-router-dom";

type CoachItemProp = {
  coachDetails: { name: string; desc: string; imgPath: string };
};

function CoachItem(props: CoachItemProp) {
  const { coachDetails } = props;
  return (
    <Link to="trainers">
      <img
        src={coachDetails.imgPath}
        className="w-[100px] h-[100px] rounded-[50px] inline-block md:w-[150px] md:h-[150px] md:rounded-[75px] md:mb-2"
      ></img>
      <div className="inline-block pl-3">
        <h3 className="font-bold text-lg md:text-center">
          {coachDetails.name}
        </h3>
        <p className="md:text-center">{coachDetails.desc}</p>
      </div>
    </Link>
  );
}

export default CoachItem;
