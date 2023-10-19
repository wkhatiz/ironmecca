import MerchItem from "./MerchItem";

type MerchGalleryProps = {
  merchList: { name: string; desc: string; price: number; imgPath: string }[];
};

function CoachGallery(props: MerchGalleryProps) {
  const { merchList } = props;
  return (
    <ul className="flex items-center flex-col md:flex-row md:justify-around">
      {merchList.map((merchDetails, index) => (
        <li
          key={index}
          className="w-[90vw] flex items-center md:flex-col md:w-[200px] md:h-[420px] md:bg-transparent md:mb-0 mb-5 last:mb-0 bg-gray-200 p-3 rounded-md"
        >
          <MerchItem merchDetails={merchDetails} />
        </li>
      ))}
    </ul>
  );
}

export default CoachGallery;
