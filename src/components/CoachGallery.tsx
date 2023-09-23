import CoachItem from "./CoachItem";

type CoachGalleryProps = {
    coachList: {name: string, desc: string, imgPath: string}[];
}

function CoachGallery(props: CoachGalleryProps) {
    const {coachList} = props;
    return (  
        <ul className="w-full flex justify-around items-center">
            {coachList.map((coachDetails, index) => (
            <li key={index}>
              <CoachItem coachDetails={coachDetails} />
            </li>
          ))}
        </ul>
    );
}

export default CoachGallery;