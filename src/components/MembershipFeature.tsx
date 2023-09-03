type MembershipFeaturesProps = {
  featureDetails: { name: string; included: boolean };
};

function MembershipFeature(props: MembershipFeaturesProps) {
  const { featureDetails } = props;

  return (
    <>
      <img
        className="w-5 h-5 inline-block mx-2"
        src={
          featureDetails.included
            ? "../../public/white-tick.png"
            : "../../public/white-cross.png"
        }
      ></img>
      <p className="inline-block leading-7 font-bold text-white">
        {featureDetails.name}
      </p>
    </>
  );
}

export default MembershipFeature;
