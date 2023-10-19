function GymGallery() {
  return (
    <ul className="flex items-center flex-col md:flex-row md:justify-around">
      <li className="w-[90vw] mb-5 md:w-[250px] md:mb-0 lg:w-[300px]">
        <img
          src="/deamon-street-panel.jpg"
          className="w-full h-[50vw] md:h-[150px] rounded-lg brightness-50 object-cover lg:h-[200px]"
        />
        <p className="">Deamon Street</p>
      </li>
      <li className="w-[90vw] mb-5 md:w-[250px] md:mb-0 lg:w-[300px]">
        <img
          src="/george-street-panel.jpg"
          className="w-full h-[50vw] md:h-[150px] rounded-lg brightness-50 object-cover lg:h-[200px]"
        />
        <p className="">George Street</p>
      </li>
      <li className="w-[90vw] mb-5 md:w-[250px] md:mb-0 lg:w-[300px]">
        <img
          src="/cumberland-street-panel.jpg"
          className="w-full h-[50vw] md:h-[150px] rounded-lg brightness-50 object-cover lg:h-[200px]"
        />
        <p className="">Cumberland Street</p>
      </li>
    </ul>
  );
}

export default GymGallery;
