import MerchItem from "./MerchItem";

type MerchGalleryProps = {
    merchList: {name: string, desc: string, price: number, imgPath: string}[];
}

function CoachGallery(props: MerchGalleryProps) {
    const {merchList} = props;
    return (  
        <ul className="w-full flex justify-around items-center">
            {merchList.map((merchDetails, index) => (
            <li key={index}>
              <MerchItem merchDetails={merchDetails} />
            </li>
          ))}
        </ul>
    );
}

export default CoachGallery;