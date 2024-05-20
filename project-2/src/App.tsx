import { FormEvent, useState } from "react";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Model";
import { IProduct } from "./interfaces";
import { formInputs, productList } from "./data";
import { Input } from "@headlessui/react";
import { productValidation } from "./validation";
import ErrorMessage from "./components/ErrorMessage";

const App = () => {
  const defaultProductObject = {
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
  };
  const [product, setProduct] = useState<IProduct>(defaultProductObject);
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    imageUrl: "",
    price: "",
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
    setErrors({ ...errors, [name]: "" });
  };

  const onCancel = () => {
    console.log("cancel");
    closeModel();
    setProduct(defaultProductObject);
  };
  const onSubmitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { title, description, imageUrl, price } = product;
    const errors = productValidation({
      title,
      description,
      imageUrl,
      price,
    });
    const hasErrorMsg =
      Object.values(errors).some((value) => value === "") &&
      Object.values(errors).every((value) => value === "");
    console.log(hasErrorMsg);
    if (!hasErrorMsg) {
      setErrors(errors);
      return;
    }
    console.log("Send data to the server");
  };
  // Renders
  const RenderProductList = productList.map((product: IProduct) => (
    <ProductCard key={product.id} product={product} />
  ));
  const RenderFormInputList = formInputs.map((input) => (
    <div className="h-auto flex flex-col" key={input.id}>
      <label htmlFor={input.name}>{input.label}</label>
      <Input
        type="text"
        id={input.id}
        name={input.name}
        className="mb-[5px] text-sm font-medium text-gray-700"
        value={product[input.name]}
        onChange={onChangeHandler}
      />
      {errors[input.name] && <ErrorMessage msg={errors[input.name]} />}
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
        <form
          className="flex items-center space-x-2"
          onSubmit={onSubmitHandler}
        >
          <button className="bg-indigo-600 hover:bg-indigo-800 p-2 rounded-md text-white w-full">
            Submit
          </button>
          <button
            className="bg-gray-600  hover:bg-gray-800 p-2 rounded-md text-white w-full"
            onClick={onCancel}
          >
            Canel
          </button>
        </form>
      </Modal>
    </main>
  );
};

export default App;
