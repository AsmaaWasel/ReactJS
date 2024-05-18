import { IProduct } from "../../interfaces";
import Button from "../../ui/Button";
import Image from "../Image";
interface Iprops {
  product: IProduct;
}
const ProductCard = ({ product }: Iprops) => {
  const { title, description, imageUrl, price } = product;
  return (
    <div className="border rounded-md p-2 flex flex-col  w-72">
      <Image
        imageURL={imageUrl}
        alt="Sport Running Shoes"
        className="w-72 rounded-md"
      />
      <h4>{title}</h4>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
      <div className="flex items-center my-5 space-x-2">
        <span className="w-5 h-5 bg-indigo-600 rounded-full cursor-pointer"></span>
        <span className="w-5 h-5 bg-yellow-600 rounded-full cursor-pointer"></span>
        <span className="w-5 h-5 bg-red-600 rounded-full cursor-pointer"></span>
      </div>
      <div className="flex items-center justify-between">
        <span>{price}</span>
      </div>
      <div className="flex  items-center justify-between">
        <span>{product.category["name"]}</span>
        <Image
          imageURL={product.category["imageUrl"]}
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
