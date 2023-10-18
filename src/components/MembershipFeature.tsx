type MembershipFeaturesProps = {
  featureDetails: { name: string; included: boolean };
};

function MembershipFeature(props: MembershipFeaturesProps) {
  const { featureDetails } = props;

  return (
    <>
      <img
        className="w-5 h-5 inline mx-2"
        src={featureDetails.included ? "/white-tick.png" : "/white-cross.png"}
      ></img>
      <p className="inline text-white">{featureDetails.name}</p>
    </>
  );
}

export default MembershipFeature;
