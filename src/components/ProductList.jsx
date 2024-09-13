const ProductList = ({ Products }) => {
  return (
    <div>
      {Products.map((product) => {
        return (
          <div className="flex items-center justify-between mb-2 w-full min-w-[400px]:">
            <span className="text-slate-400">{product.title}</span>
            <div className="flex items-center gap-x-3">
              <span className="text-slate-400">
                {new Date(product.createdAt).toLocaleDateString("fa-IR")}
              </span>
              <span className="block px-3 py-0.5 text-slate-400 border border-slate-400 text-sm rounded-2xl">
                {product.categoryId}
              </span>
              <span className="flex items-center justify-center w-7 h-7 rounded-2xl bg-slate-500 border-2 border-slate-300 text-slate-300">
                {product.quantity}
              </span>
              <button className="border px-2 py-0.5 rounded-2xl border-red-400 text-red-400 delete-product">
                delete
              </button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ProductList
