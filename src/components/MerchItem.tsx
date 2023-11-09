import { Link } from "react-router-dom";

type MerchItemProp = {
  merchDetails: { name: string; desc: string; price: number; imgPath: string };
};

function CoachItem(props: MerchItemProp) {
  const { merchDetails } = props;
  return (
    <Link to="checkout">
      <img
        src={merchDetails.imgPath}
        className="w-[100px] h-[100px] inline-block object-cover md:w-[200px] md:h-[250px] md:mb-3"
      ></img>
      <div className="inline-block pl-3 max-[530px]:w-[200px]">
        <h3 className="font-bold text-lg">{merchDetails.name}</h3>
        <p className="block md:mb-2">{merchDetails.desc}</p>
        <p className="block">${merchDetails.price}</p>
      </div>
    </Link>
  );
}

export default CoachItem;
