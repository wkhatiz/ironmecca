function GymGallery() {
  return (
    <ul className="flex items-center flex-col">
      <li className="w-[90vw] mb-5">
        <img
          src="/deamon-street-panel.jpg"
          className="w-full h-[50vw] rounded-lg brightness-50 object-cover"
        />
        <p className="">Deamon Street</p>
      </li>
      <li className="w-[90vw] mb-5">
        <img
          src="/george-street-panel.jpg"
          className="w-full h-[50vw] rounded-lg brightness-50 object-cover"
        />
        <p className="">George Street</p>
      </li>
      <li className="w-[90vw] mb-5">
        <img
          src="/cumberland-street-panel.jpg"
          className="w-full h-[50vw] rounded-lg brightness-50 object-cover"
        />
        <p className="">Cumberland Street</p>
      </li>
    </ul>
  );
}

export default GymGallery;
