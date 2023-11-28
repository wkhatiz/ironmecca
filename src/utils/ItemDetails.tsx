const itemsArray: { id: string; title: string; price: number }[] = [
  {
    id: "1",
    title: "Tier A - Monthly",
    price: 25.34,
  },
  {
    id: "2",
    title: "Tier B - Monthly",
    price: 30.29,
  },
  {
    id: "3",
    title: "Tier C - Monthly",
    price: 100.0,
  },
  {
    id: "4",
    title: "Olympic Weightlifting Class",
    price: 14.23,
  },
  {
    id: "5",
    title: "Powerlifting Champions Class",
    price: 16.74,
  },
  {
    id: "6",
    title: "Cross-Fit Craziness Class",
    price: 20.12,
  },
  {
    id: "7",
    title: "Iron Mecca Gym Towel",
    price: 20.23,
  },
  {
    id: "8",
    title: "Iron Mecca Shaker Cup",
    price: 10.45,
  },
  {
    id: "9",
    title: "Iron Mecca Hoodie",
    price: 50.76,
  },
  {
    id: "10",
    title: "Iron Mecca Backpack",
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
