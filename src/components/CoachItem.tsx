type CoachItemProp = {
  coachDetails: { name: string; desc: string; imgPath: string };
};

function CoachItem(props: CoachItemProp) {
  const { coachDetails } = props;
  return (
    <>
      <img
        src={coachDetails.imgPath}
        className="w-[100px] h-[100px] rounded-[50px] inline-block"
      ></img>
      <div className="inline-block pl-3">
        <h3 className="font-bold text-lg">{coachDetails.name}</h3>
        <p>{coachDetails.desc}</p>
      </div>
    </>
  );
}

export default CoachItem;
