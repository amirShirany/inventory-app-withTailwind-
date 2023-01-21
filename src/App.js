import "./App.css";
import { useState } from "react";
import NavBar from "./components/NavBar";
import CategoryForm from "./components/CategoryForm";
import ProductsForm from "./components/ProductsForm";
import ProductList from "./components/ProductList";

function App() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState("");

  return (
    <div>
      <div className="bg-slate-800  min-h-screen">
        <NavBar />
        <div className="container max-w-screen-sm mx-auto p-4">
          <CategoryForm setCategories={setCategories} />
          <ProductsForm categories={categories} setProducts={setProducts} />
          <ProductList products={products} />
        </div>
      </div>
    </div>
  );
}

export default App;
