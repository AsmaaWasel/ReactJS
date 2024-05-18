import { useState } from "react";
import ProductCard from "./components/ProductCard";
import Modal from "./components/ui/Model";
import ProductList from "./data";

const App = () => {
  const RenderProductList = ProductList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));
  const [isOpen, setIsOpen] = useState(true);

  function openModel() {
    setIsOpen(true);
  }

  function closeModel() {
    setIsOpen(false);
  }

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
