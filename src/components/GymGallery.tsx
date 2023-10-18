function GymGallery() {
  return (
    <ul className="w-full flex justify-around items-center">
      <li className="w-[300px] h-[200px] mx-4 relative cursor-pointer brightness-75 hover:brightness-100">
        <img
          src="/deamon-street-panel.jpg"
          className="w-full h-full object-cover rounded-lg brightness-75"
        />
        <p className="absolute bottom-4 right-4 font-bold text-white">
          Deamon Street
        </p>
      </li>
      <li className="w-[300px] h-[200px] mx-4 relative cursor-pointer brightness-75 hover:brightness-100">
        <img
          src="/george-street-panel.jpg"
          className="w-full h-full object-cover rounded-lg brightness-75"
        />
        <p className="absolute bottom-4 right-4 font-bold text-white">
          George Street
        </p>
      </li>
      <li className="w-[300px] h-[200px] mx-4 relative cursor-pointer brightness-75 hover:brightness-100">
        <img
          src="/cumberland-street-panel.jpg"
          className="w-full h-full object-cover rounded-lg brightness-75"
        />
        <p className="absolute bottom-4 right-4 font-bold text-white">
          Cumberland Street
        </p>
      </li>
    </ul>
  );
}

export default GymGallery;
