type ClassPanelProp = {
    heading: string;
    desc: string;
    price: number;
    imgPath: string;
}

function ClassPanel(props: ClassPanelProp) {
    const {heading, desc, price, imgPath} = props;

  return (
    <div className="w-[1000px] h-[220px] grid grid-cols-3 grid-rows-1 my-5">
      <img
        src={imgPath}
        className="h-full w-full"
      />
      <div className=" col-span-2">
        <h3 className="font-bold text-2xl pt-5 px-5 pb-2">
          {heading}
        </h3>
        <p className="text-xl py-2 px-5">
          {desc}
        </p>
        <button className="bg-red-600 py-2 w-[630px] rounded-lg text-white font-bold text-lg hover:bg-red-800 cursor-pointer block mx-auto mt-5">
          Book A Session For ${price}
        </button>
      </div>
    </div>
  );
}

export default ClassPanel;
