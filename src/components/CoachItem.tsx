type CoachItemProp = {
    coachDetails: {name: string, desc: string, imgPath: string}
}

function CoachItem(props: CoachItemProp) {
    const {coachDetails} = props;
    return (  
        <>
            <img src={coachDetails.imgPath} className="w-[200px] h-[200px] rounded-[100px]"></img>
            <h3 className="w-[200px] text-center font-bold text-xl pt-2">{coachDetails.name}</h3>
            <p className="w-[200px] text-center">{coachDetails.desc}</p>
        </>
    );
}

export default CoachItem;