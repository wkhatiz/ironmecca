const gymDetailsArr = [
  {
    id: "G01",
    name: "Iron Mecca Deamon Street",
    panelImgSrc: "deamon-street-panel.jpg",
    description:
      "Unleash your inner warrior and sculpt your physique amidst an atmosphere charged with relentless energy. Join a community driven by passion, power, " +
      "and the pursuit of greatness. Elevate your fitness journey at Iron Mecca Deamon Street Gym – where legends are forged and limits are shattered.",
    features: [
      { imgSrc: "clock-icon.png", label: "24 Hour Access" },
      { imgSrc: "swim-icon.png", label: "Olympic Size Pool" },
      { imgSrc: "spa-icon.png", label: "Spa & Sauna" },
    ],
    phone: "1800 123 456",
    lattitude: 51.5,
    longitude: -0.09,
  },
  {
    id: "G02",
    name: "Iron Mecca George Street",
    panelImgSrc: "george-street-panel.jpg",
    description:
      "Embark on a transformative fitness experience at George Street Gym, where wellness meets urban vitality. Embrace the pulse of the city as you sculpt " +
      "your body and sharpen your mind. Our state-of-the-art facility awaits you in the heart of George Street, promising a dynamic blend of modern fitness and community spirit. ",
    features: [
      { imgSrc: "clock-icon.png", label: "24 Hour Access" },
      { imgSrc: "treadmill-icon.png", label: "AI Gym Equipment" },
      { imgSrc: "tree-icon.png", label: "Outdoor Meditation Space" },
    ],
    phone: "1800 654 321",
    lattitude: 48.85,
    longitude: 2.29,
  },
  {
    id: "G03",
    name: "Iron Mecca Cumberland Street",
    panelImgSrc: "cumberland-street-panel.jpg",
    description:
      "Nestled in the heart of the city, our gym is more than a workout space – it's a sanctuary for those who seek the pinnacle of fitness. Join a community " +
      "forged in iron, where determination meets innovation. Elevate your fitness journey amidst cutting-edge equipment and supportive camaraderie.",
    features: [
      { imgSrc: "clock-icon.png", label: "24 Hour Access" },
      { imgSrc: "massage-icon.png", label: "Massage Specialists" },
      { imgSrc: "burger-icon.png", label: "Member Buffet" },
    ],
    phone: "1800 112 233",
    lattitude: 41.89,
    longitude: 12.49,
  },
];

function getGymDetails(id: string) {
  for (let i = 0; i < gymDetailsArr.length; i++) {
    if (gymDetailsArr[i].id == id) {
      return gymDetailsArr[i];
    }
  }
}

export { gymDetailsArr, getGymDetails };
