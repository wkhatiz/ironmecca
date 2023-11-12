type ImageCarouselProps = {
  imageArr: string[];
  setImageArr: React.Dispatch<React.SetStateAction<string[]>>;
};

function ImageCarousel(props: ImageCarouselProps) {
  let { imageArr, setImageArr } = props;

  function handleClick(index: number) {
    reorderImageArr(index);
  }

  function reorderImageArr(index: number) {
    let tempArr = [...imageArr];
    let clickedImage = tempArr[index];
    tempArr.splice(index, 1);
    tempArr.unshift(clickedImage);
    setImageArr(tempArr);
    console.log(tempArr);
  }

  return (
    <div id="coach_image_carousel" className=" w-4/5 block mx-auto">
      <img
        src={imageArr[0]}
        className=" w-full h-[300px] object-cover block mb-3 rounded-t-2xl"
        onClick={() => handleClick(0)}
      ></img>
      <div className="w-full h-[100px] flex justify-between">
        <img
          src={imageArr[1]}
          className="w-[140px] h-full object-cover rounded-bl-2xl hover:brightness-75 cursor-pointer"
          onClick={() => handleClick(1)}
        ></img>
        <img
          src={imageArr[2]}
          className="w-[140px] h-full object-cover hover:brightness-75 cursor-pointer"
          onClick={() => handleClick(2)}
        ></img>
        <img
          src={imageArr[3]}
          className="w-[140px] h-full object-cover rounded-br-2xl hover:brightness-75 cursor-pointer"
          onClick={() => handleClick(3)}
        ></img>
      </div>
    </div>
  );
}

export default ImageCarousel;
