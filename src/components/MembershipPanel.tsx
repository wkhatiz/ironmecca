import MembershipFeature from "./MembershipFeature";

type MembershipPanelProps = {
  name: string;
  price: number;
  featuresList: { name: string; included: boolean }[];
};

function MembershipPanel(props: MembershipPanelProps) {
  const { name, price, featuresList } = props;

  return (
    <>
      <div className="w-[1000px] h-[200px] my-5 bg-red-500 pt-5">
        <div className="flex justify-between items-center w-full h-[70px] p-10">
          <h3 className="text-white text-4xl font-bold">{name}</h3>
          <h3 className="text-white text-4xl font-bold">${price} / month</h3>
        </div>
        <ul className="flex justify-around items-center w-full h-[50px] p-10">
          {featuresList.map((featureDetails, index) => (
            <li key={index}>
              <MembershipFeature featureDetails={featureDetails} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default MembershipPanel;
