// products = [
//   {
//     id: 1,
//     title: "React.js",
//     category: "frontend",
//     createdAt: "2021-10-02",
//   },
//   {
//     id: 2,
//     title: "Vue.js",
//     category: "frontend",
//     createdAt: "2022-10-02",
//   },
//   {
//     id: 3,
//     title: "Node.js",
//     category: "backend",
//     createdAt: "2024-10-02",
//   },
// ]

// categories = [
//   {
//     id: 1,
//     title: "frontend",
//     description: "frontend of application",
//     createdAt: "2021-10-02",
//   },
//   {
//     id: 2,
//     title: "Vue.js",
//     description: "backend of application",
//     createdAt: "2022-10-02",
//   },
// ]

import "./App.css"
import { useState } from "react"
import NavBar from "./components/NavBar"
import CategoryForm from "./components/CategoryForm"
import ProductsForm from "./components/ProductsForm"

function App() {
  const [categories, setCategories] = useState([])
  // const [products, setProducts] = useState("")

  return (
    <div>
      <div className="bg-slate-500  min-h-screen">
        <NavBar />
        <div className="container max-w-screen-sm mx-auto p-4">
          <CategoryForm setCategories={setCategories} />
          <ProductsForm categories={categories} />
          {/* <ProductList /> */}
        </div>
      </div>
    </div>
  )
}

export default App
