import ProductCard from "./components/ProductCard";
import ProductList from "./data";

const App = () => {
  const RenderProductList = ProductList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));
  return (
    <div className="m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 rounded-md">
      {RenderProductList}
    </div>
  );
};

export default App;
