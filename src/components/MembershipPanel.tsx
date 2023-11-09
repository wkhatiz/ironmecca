import MembershipFeature from "./MembershipFeature";
import { Link } from "react-router-dom";

type MembershipPanelProps = {
  name: string;
  price: number;
  featuresList: { name: string; included: boolean }[];
};

function MembershipPanel(props: MembershipPanelProps) {
  const { name, price, featuresList } = props;

  return (
    <Link to="checkout">
      <div className="bg-red-600 p-4 hover:brightness-50 cursor-pointer">
        <div className="flex justify-between mb-2 md:mb-5">
          <h3 className="text-white font-bold text-2xl md:text-3xl">{name}</h3>
          <h3 className="text-white font-bold text-lg md:text-xl">
            ${price} / month
          </h3>
        </div>
        <ul className="md:flex md:justify-around">
          {featuresList.map((featureDetails, index) => (
            <li key={index} className="block">
              <MembershipFeature featureDetails={featureDetails} />
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}

export default MembershipPanel;
