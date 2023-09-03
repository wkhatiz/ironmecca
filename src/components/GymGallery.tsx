function GymGallery() {
  return (
    <ul className="w-full flex justify-around items-center">
      <li className="w-[300px] h-[200px] mx-4 relative">
        <img
          src="../../public/deamon-street-panel.jpg"
          className="w-full h-full object-cover cursor-pointer brightness-50 hover:brightness-75 rounded-lg"
        />
        <p className="absolute bottom-4 right-4 font-bold text-white">
          Deamon Street
        </p>
      </li>
      <li className="w-[300px] h-[200px] mx-4 relative">
        <img
          src="../../public/george-street-panel.jpg"
          className="w-full h-full object-cover cursor-pointer brightness-50 hover:brightness-75 rounded-lg"
        />
        <p className="absolute bottom-4 right-4 font-bold text-white">
          George Street
        </p>
      </li>
      <li className="w-[300px] h-[200px] mx-4 relative">
        <img
          src="../../public/cumberland-street-panel.jpg"
          className="w-full h-full object-cover cursor-pointer brightness-50 hover:brightness-75  rounded-lg"
        />
        <p className="absolute bottom-4 right-4 font-bold text-white">
          Cumberland Street
        </p>
      </li>
    </ul>
  );
}

export default GymGallery;
