import CoachItem from "./CoachItem";

type CoachGalleryProps = {
  coachList: { name: string; desc: string; imgPath: string }[];
};

function CoachGallery(props: CoachGalleryProps) {
  const { coachList } = props;
  return (
    <ul className="flex items-center flex-col md:flex-row md:justify-around">
      {coachList.map((coachDetails, index) => (
        <li
          key={index}
          className="w-[90vw] flex items-center md:flex-col md:w-[150px] md:h-[260px] md:mb-0 md:bg-transparent md:p-0 mb-5 last:mb-0 bg-gray-200 p-3 rounded-md"
        >
          <CoachItem coachDetails={coachDetails} />
        </li>
      ))}
    </ul>
  );
}

export default CoachGallery;
