//this is just the superficial information that will show up on the homescreen. Refer to 'ItemDetails.tsx' for more detail

export const merchArray: {
  id: string;
  name: string;
  desc: string;
  price: number;
  imgPath: string;
}[] = [
  {
    id: "7",
    name: "Gym Towel",
    desc: "Microfibre with integrated storage for your things",
    price: 20.23,
    imgPath: "/towel.jpg",
  },
  {
    id: "8",
    name: "Shaker Cup",
    desc: "All your nutrients, shakable and ready to go",
    price: 10.45,
    imgPath: "/cup.jpg",
  },
  {
    id: "9",
    name: "Hoodie",
    desc: "The one and only, pump cover for the legends",
    price: 50.76,
    imgPath: "/hoodie.jpg",
  },
  {
    id: "10",
    name: "Backpack",
    desc: "Plenty of space for the towel, cop, hoodie and gear",
    price: 100.23,
    imgPath: "/backpack.jpg",
  },
];
