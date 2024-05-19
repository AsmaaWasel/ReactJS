import { useState } from "react";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Model";
import { IProduct } from "./interfaces";
import { formInputs, productList } from "./data";
import { Input } from "@headlessui/react";

const App = () => {
  const [product, setProduct] = useState<IProduct>({
    id: 1,
    title: "",
    description: "",
    imageUrl: "",
    price: "",
    colors: [""],
    category: {
      name: "",
      imageUrl: "",
    },
  });
  const [isOpen, setIsOpen] = useState(true);

  // Handlers
  const openModel = () => {
    setIsOpen(true);
  };

  const closeModel = () => {
    setIsOpen(false);
  };
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setProduct({ ...product, [name]: value });
  };
  console.log(product);
  // Renders
  const RenderProductList = productList.map((product: IProduct) => (
    <ProductCard key={product.id} product={product} />
  ));
  const RenderFormInputList = formInputs.map((input) => (
    <div className="h-auto flex flex-col">
      <label htmlFor={input.name}>{input.label}</label>
      <Input
        type="text"
        id={input.id}
        name={input.name}
        className="mb-[5px] text-sm font-medium text-gray-700"
        value={product[input.name]}
        onChange={onChangeHandler}
      />
    </div>
  ));

  return (
    <main className="container">
      <button
        className="bg-indigo-600 hover:bg-indigo-800 p-2 rounded-md text-white"
        onClick={openModel}
      ></button>

      <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 rounded-md">
        {RenderProductList}
      </div>
      <Modal isOpen={isOpen} closeModel={closeModel} title="Add A New Product">
        {RenderFormInputList}
        <div className="flex items-center space-x-2">
          <button className="bg-indigo-600 hover:bg-indigo-800 p-2 rounded-md text-white w-full">
            Submit
          </button>
          <button className="bg-gray-600  hover:bg-gray-800 p-2 rounded-md text-white w-full">
            Canel
          </button>
        </div>
      </Modal>
    </main>
  );
};

export default App;
