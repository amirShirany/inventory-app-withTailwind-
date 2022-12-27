import { useState } from "react";

const ProductsForm = ({ categories }) => {
  const [productsFormData, setProductsFormData] = useState({
    title: " ",
    quantity: "",
    categoryId: "",
  });
  const [products, setProducts] = useState("");

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProductsFormData({ ...productsFormData, [name]: value });
  };

  const addNewProduct = (e) => {
    e.preventDefault();
    const newProduct = {
      ...productsFormData,
      createAt: new Date().toISOString(),
      id: new Date().getTime(),
    };
    setProducts((prevState) => [...prevState, newProduct]);
    setProductsFormData({ title: "", description: "", categoryId: "" });
  };

  return (
    <div className="mb-6">
      <h2 className="text-xl text-slate-300 font-bold mb-2">Add New Product</h2>
      <form className="bg-slate-700 p-4 rounded-xl flex flex-col gap-y-4">
        <div>
          <label htmlFor="product-title" className="block mb-1 text-slate-400">
            title
          </label>
          <input
            type="text"
            name="title"
            id="product-title"
            className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full md:w-auto"
            value={productsFormData.title}
            onChange={changeHandler}
          ></input>
        </div>
        <div>
          <label
            htmlFor="product-quantity"
            className="block mb-1 text-slate-400"
          >
            quantity
          </label>
          <input
            type="number"
            name="quantity"
            id="product-quantity"
            className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full md:w-auto"
            value={productsFormData.quantity}
            onChange={changeHandler}
          ></input>
        </div>
        <div>
          <label
            htmlFor="product-category"
            className="block mb-1 text-slate-400"
          >
            category
          </label>
          <select
            name="categoryId"
            id="category"
            className="bg-transparent text-slate-400 rounded-xl w-full"
            value={productsFormData.categoryId}
            onChange={changeHandler}
          >
            {categories.map((category) => {
              return (
                <option
                  key={category.id}
                  className="bg-slate-500 text-slate-300"
                  value={category.id}
                >
                  {category.title}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex items-center justify-between gap-x-4">
          <button
            onClick={addNewProduct}
            id="add-new-product"
            className="flex-1 bg-slate-500 text-slate-200 rounded-xl py-2"
          >
            Add New Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductsForm;
