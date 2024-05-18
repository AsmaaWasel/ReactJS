// interface Iprops {

// }
import Button from "../../ui/Button";
import Image from "../Image";
const ProductCard = () => {
  return (
    <div className="border rounded-md p-2 flex flex-col">
      <Image
        imageURL="./public/assets/sport-running-shoes.jpg"
        alt="Sport Running Shoes"
        className="w-60 rounded-md"
      />
      <h4>Sport-Running-Shoes</h4>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid
        asperiores deserunt at nisi ad doloribus ratione obcaecati aut facilis
        eligendi officia omnis, unde eum nihil, accusantium reiciendis adipisci
        incidunt laborum!
      </p>
      <div className="flex items-center my-5 space-x-2">
        <span className="w-5 h-5 bg-indigo-600 rounded-full cursor-pointer"></span>
        <span className="w-5 h-5 bg-yellow-600 rounded-full cursor-pointer"></span>
        <span className="w-5 h-5 bg-red-600 rounded-full cursor-pointer"></span>
      </div>
      <div className="flex  items-center justify-between">
        <span>$500,000</span>
        <Image
          imageURL="./public/assets/sport-running-shoes.jpg"
          alt="Sport Running Shoes"
          className="w-10 h-10 rounded-md justify-center"
        />
      </div>
      <div className="flex  items-center justify-between space-x-2 my-5">
        <Button className="bg-indigo-600 ">Edit</Button>
        <Button className="bg-red-600 w-full">Delete</Button>
      </div>
    </div>
  );
};

export default ProductCard;
