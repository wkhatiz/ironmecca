type ClassPanelProp = {
  heading: string;
  desc: string;
  price: number;
  imgPath: string;
};

function ClassPanel(props: ClassPanelProp) {
  const { heading, desc, price, imgPath } = props;

  return (
    <>
      <img
        src={imgPath}
        className="w-full h-[50vw] md:w-[300px] md:h-[200px] md:inline-block rounded-lg object-cover lg:w-[400px] lg:h-[200px]"
      />
      <div className="md:inline-block md:w-[350px] md:pl-4 lg:w-[500px]">
        <h3 className="w-full md:w-auto md:text-left text-center font-bold p-1 lg:text-xl">
          {heading}
        </h3>
        <p className="w-full md:w-auto md:text-left text-center p-1">{desc}</p>
        <button className="bg-red-600 text-white p-2 rounded-md font-bold w-[250px] mx-auto md:mx-0 mt-2 block hover:brightness-50">
          Book A Session For ${price}
        </button>
      </div>
    </>
  );
}

export default ClassPanel;
