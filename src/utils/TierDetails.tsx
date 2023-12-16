//this is just the superficial information that will show up on the homescreen. Refer to 'ItemDetails.tsx' for more detail

export const tierArray: {
  id: string;
  name: string;
  price: number;
  featuresList: { name: string; included: boolean }[];
}[] = [
  {
    id: "1",
    name: "Tier A",
    price: 25.34,
    featuresList: [
      { name: "Gym Access", included: true },
      { name: "24/7 Consulting", included: true },
      { name: "VIP Lounge", included: false },
      { name: "Physiotherapy", included: false },
      { name: "Sauna", included: false },
    ],
  },
  {
    id: "2",
    name: "Tier B",
    price: 25.34,
    featuresList: [
      { name: "Gym Access", included: true },
      { name: "24/7 Consulting", included: true },
      { name: "VIP Lounge", included: false },
      { name: "Physiotherapy", included: false },
      { name: "Sauna", included: false },
    ],
  },
  {
    id: "3",
    name: "Tier C",
    price: 25.34,
    featuresList: [
      { name: "Gym Access", included: true },
      { name: "24/7 Consulting", included: true },
      { name: "VIP Lounge", included: false },
      { name: "Physiotherapy", included: false },
      { name: "Sauna", included: false },
    ],
  },
];
