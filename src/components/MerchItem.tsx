type MerchItemProp = {
    merchDetails: {name: string, desc: string, price: number, imgPath: string}
}

function CoachItem(props: MerchItemProp) {
    const {merchDetails} = props;
    return (  
        <>
            <img src={merchDetails.imgPath} className="w-[250px] h-[350px] object-cover"></img>
            <h3 className="w-[250px] font-bold text-xl pt-2">{merchDetails.name}</h3>
            <p className="w-[250px] ">{merchDetails.desc}</p>
            <p className="w-[250px] pt-3">${merchDetails.price}</p>
        </>
    );
}

export default CoachItem;