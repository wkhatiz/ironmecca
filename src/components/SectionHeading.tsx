type SectionHeadingProps = {
  text: string;
};

function SectionHeading(props: SectionHeadingProps) {
  const { text } = props;

  return (
    <h2 className="my-8 w-full text-center font-bold text-xl md:text-2xl md:text-left md:px-5">
      {text}
    </h2>
  );
}

export default SectionHeading;
