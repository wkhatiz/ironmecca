import MembershipFeature from "./MembershipFeature";

type MembershipPanelProps = {
  name: string;
  price: number;
  featuresList: { name: string; included: boolean }[];
};

function MembershipPanel(props: MembershipPanelProps) {
  const { name, price, featuresList } = props;

  return (
    <div className="bg-red-600 p-4">
      <div className="flex justify-between mb-2">
        <h3 className="text-white font-bold text-2xl">{name}</h3>
        <h3 className="text-white font-bold text-lg">${price} / month</h3>
      </div>
      <ul>
        {featuresList.map((featureDetails, index) => (
          <li key={index} className="block">
            <MembershipFeature featureDetails={featureDetails} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MembershipPanel;
