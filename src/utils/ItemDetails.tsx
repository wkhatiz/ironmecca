// this is the information that will govern how the cart it calculated.

const itemsArray: {
  id: string;
  title: string;
  imgSrc: string;
  desc: string;
  price: number;
}[] = [
  {
    id: "1",
    title: "Tier A - Monthly",
    imgSrc: "/shopping-bag.jpg",
    desc:
      "Iron Mecca offer multiple membership levels each with their own benefits. " +
      "Tier A allows for access into any of our gyms across Australia and 24/7 Consultations " +
      "with licensed specialists.",
    price: 25.34,
  },
  {
    id: "2",
    title: "Tier B - Monthly",
    imgSrc: "/shopping-bag.jpg",
    desc:
      "Iron Mecca offer multiple membership levels each with their own benefits. " +
      "Tier B allows for access into any of our gyms across Australia and 24/7 Consultations " +
      "with licensed specialists, Physiotherapy once a week and access to the Sauna on select premises.",
    price: 30.29,
  },
  {
    id: "3",
    title: "Tier C - Monthly",
    imgSrc: "/shopping-bag.jpg",
    desc:
      "Iron Mecca offer multiple membership levels each with their own benefits. " +
      "Tier B allows for unlimited access to any of our gyms and for any of our services " +
      "Your wish is our command.",
    price: 100.0,
  },
  {
    id: "4",
    title: "Olympic Weightlifting Class",
    imgSrc: "/olympic-weightlifting.jpg",
    desc: "",
    price: 14.23,
  },
  {
    id: "5",
    title: "Powerlifting Champions Class",
    imgSrc: "/powerlifting.jpg",
    desc: "",
    price: 16.74,
  },
  {
    id: "6",
    title: "Cross-Fit Craziness Class",
    imgSrc: "/crossfit.jpg",
    desc: "",
    price: 20.12,
  },
  {
    id: "7",
    title: "Iron Mecca Gym Towel",
    imgSrc: "/towel.jpg",
    desc:
      "Whether you're hitting the weights, mastering yoga poses, or breaking a sweat in your favorite cardio class, our gym towels are the ideal fitness " +
      "accessory. Upgrade your workout routine with the ultimate blend of functionality and style. Choose from our diverse range of colors and patterns to match " +
      "your personal taste. Elevate every rep, set, and stretch with the perfect gym towel by your side. Embrace the fitness lifestyle with Iron Mecca's Gym Towel " +
      "Collection - where performance meets style.",
    price: 20.23,
  },
  {
    id: "8",
    title: "Iron Mecca Shaker Cup",
    imgSrc: "/cup.jpg",
    desc:
      "Whether you're fueling up before a workout, recovering post-exercise, or simply staying hydrated throughout the day, our Shaker Cup is the ideal " +
      "choice. Experience the perfect blend of form and function as you take your nutrition routine to the next level. Customize your shaker cup experience with " +
      "a variety of vibrant colors and designs. Upgrade your hydration game with Iron Mecca's Shaker Cup - where style meets performance.",
    price: 10.45,
  },
  {
    id: "9",
    title: "Iron Mecca Hoodie",
    imgSrc: "/hoodie.jpg",
    desc:
      "Whether you're braving the elements during outdoor training or seeking a cozy layer for your gym sessions, our Gym Hoodie is the perfect " +
      "choice. Elevate your workout wardrobe with a fusion of functionality and fashion. Choose from a range of colors to match your personal style. Embrace " +
      "the warmth and style you deserve with Iron Mecca's Gym Hoodie - where performance meets fashion.",
    price: 50.76,
  },
  {
    id: "10",
    title: "Iron Mecca Backpack",
    imgSrc: "/backpack.jpg",
    desc:
      "Whether you're headed to the gym, office, or a weekend adventure, the Iron Mecca Performance Backpack has got you covered. Elevate your style " +
      "and stay organized with a backpack that keeps pace with your active lifestyle. Choose from a range of sleek designs and color options. Make every journey a " +
      "stylish and organized one with Iron Mecca's Performance Backpack - where functionality meets fashion.",
    price: 100.23,
  },
];

function getItemData(id: string) {
  let itemData = itemsArray.find((item) => item.id === id);

  if (itemData == undefined) {
    console.log("getItemData() failed: item was not found in itemArray");
    return itemData;
  }

  return itemData;
}

export { itemsArray, getItemData };
