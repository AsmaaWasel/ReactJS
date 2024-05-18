import { IProduct } from "../interfaces";

const ProductList: IProduct[] = [
  {
    id: 1,
    title: "Sport Running Shoes",
    description: "High-quality running shoes for the best performance.",
    imageUrl: "https://images.unsplash.com/photo-1606813901444-aa5dcb5ac72e",
    price: 120.0,
    colors: ["#FF0000", "#0000FF", "#008000"], // Red, Blue, Green
    category: {
      name: "Footwear",
      imageUrl: "https://images.unsplash.com/photo-1605733160314-b23f1ef7c30e",
    },
  },
  {
    id: 2,
    title: "Wireless Headphones",
    description: "Noise-cancelling headphones with superb sound quality.",
    imageUrl: "https://images.unsplash.com/photo-1511367461989-f85a21fda167",
    price: 250.0,
    colors: ["#000000", "#FFFFFF", "#808080"], // Black, White, Grey
    category: {
      name: "Electronics",
      imageUrl: "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9",
    },
  },
  {
    id: 3,
    title: "Smart Watch",
    description: "A smart watch with various health tracking features.",
    imageUrl: "https://images.unsplash.com/photo-1512508497407-800ee3b0e0d6",
    price: 199.99,
    colors: ["#000000", "#C0C0C0", "#B76E79"], // Black, Silver, Rose Gold
    category: {
      name: "Wearables",
      imageUrl: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7",
    },
  },
  {
    id: 4,
    title: "Gaming Laptop",
    description: "High-performance laptop designed for gaming.",
    imageUrl: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
    price: 1500.0,
    colors: ["#000000", "#FF0000", "#0000FF"], // Black, Red, Blue
    category: {
      name: "Computers",
      imageUrl: "https://images.unsplash.com/photo-1555617117-08ae6e80c0ee",
    },
  },
  {
    id: 5,
    title: "Bluetooth Speaker",
    description: "Portable Bluetooth speaker with excellent sound.",
    imageUrl: "https://images.unsplash.com/photo-1495107334309-fcf20504a5ab",
    price: 75.0,
    colors: ["#0000FF", "#000000", "#FF0000"], // Blue, Black, Red
    category: {
      name: "Audio",
      imageUrl: "https://images.unsplash.com/photo-1502209524161-68b1fbc54d53",
    },
  },
  {
    id: 6,
    title: "Digital Camera",
    description: "Compact digital camera with high resolution.",
    imageUrl: "https://images.unsplash.com/photo-1519183071298-a2962a5a880b",
    price: 300.0,
    colors: ["#000000", "#C0C0C0", "#FF0000"], // Black, Silver, Red
    category: {
      name: "Cameras",
      imageUrl: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
    },
  },
  {
    id: 7,
    title: "Fitness Tracker",
    description: "Track your fitness activities with this smart device.",
    imageUrl: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648",
    price: 50.0,
    colors: ["#000000", "#00FF00", "#FFC0CB"], // Black, Green, Pink
    category: {
      name: "Wearables",
      imageUrl: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648",
    },
  },
  {
    id: 8,
    title: "4K Television",
    description: "Experience ultra high-definition visuals with this 4K TV.",
    imageUrl: "https://images.unsplash.com/photo-1593228372069-d0763b0e92a3",
    price: 800.0,
    colors: ["#000000", "#808080", "#C0C0C0"], // Black, Grey, Silver
    category: {
      name: "Home Entertainment",
      imageUrl: "https://images.unsplash.com/photo-1593228372069-d0763b0e92a3",
    },
  },
  {
    id: 9,
    title: "Electric Kettle",
    description: "Boil water quickly with this electric kettle.",
    imageUrl: "https://images.unsplash.com/photo-1563191911-53d4b49337a3",
    price: 30.0,
    colors: ["#FFFFFF", "#000000", "#C0C0C0"], // White, Black, Silver
    category: {
      name: "Kitchen Appliances",
      imageUrl: "https://images.unsplash.com/photo-1579758629934-2120e1fc2bc6",
    },
  },
  {
    id: 10,
    title: "Smartphone",
    description: "Latest smartphone with advanced features.",
    imageUrl: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
    price: 999.99,
    colors: ["#000000", "#C0C0C0", "#FFD700"], // Black, Silver, Gold
    category: {
      name: "Mobile Phones",
      imageUrl: "https://images.unsplash.com/photo-1512499617640-c2f99912a27d",
    },
  },
];

export default ProductList;
