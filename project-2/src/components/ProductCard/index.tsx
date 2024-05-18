import { txtSlicer } from "../../functions";
import { IProduct } from "../../interfaces";
import Button from "../../ui/Button";
import Image from "../Image";
interface Iprops {
  product: IProduct;
}
const ProductCard = ({ product }: Iprops) => {
  const { title, description, imageUrl, price, category } = product;
  return (
    <div className=" max-w-sm md:max-w-lg mx-auto border rounded-md p-2 flex flex-col">
      <Image
        imageURL={imageUrl}
        alt={category.name}
        className="w-90 h-72 rounded-md"
      />
      <h4>{title}</h4>
      <p className="mt-2 text-sm text-gray-600 line-clamp-3">
        {txtSlicer(description)}
      </p>
      <div className="flex items-center my-5 space-x-2">
        <span className="w-5 h-5 bg-indigo-600 rounded-full cursor-pointer"></span>
        <span className="w-5 h-5 bg-yellow-600 rounded-full cursor-pointer"></span>
        <span className="w-5 h-5 bg-red-600 rounded-full cursor-pointer"></span>
      </div>
      <div className="flex items-center justify-between">
        <span>${price.toFixed(2)}</span>
      </div>
      <div className="flex  items-center justify-between">
        <span>{category.name}</span>
        <Image
          imageURL={category.imageUrl}
          alt="Sport Running Shoes"
          className="w-10 h-10 rounded-md justify-center"
        />
      </div>
      <div className="flex  items-center justify-between space-x-2 my-5">
        <Button className="bg-indigo-600">Edit</Button>
        <Button className="bg-red-600">Delete</Button>
      </div>
    </div>
  );
};

export default ProductCard;
