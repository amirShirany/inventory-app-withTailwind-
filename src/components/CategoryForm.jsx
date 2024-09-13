import { useState } from "react"

const CategoryForm = ({ setCategories }) => {
  const [isShow, setIsShow] = useState(false)
  const [categoryFormData, setCategoryFormData] = useState({
    title: "",
    description: "",
  })

  const changeHandler = (e) => {
    const { value, name } = e.target
    setCategoryFormData({ ...categoryFormData, [name]: value })
  }

  const addNewCategoryHandler = (e) => {
    e.preventDefault()
    const newCategory = {
      ...categoryFormData,
      cratedAt: new Date().toISOString(),
    }
    setCategories((prevState) => [...prevState, newCategory])
  }

  return (
    <section>
      <div className={`mb-6 ${isShow ? "" : "hidden"}`} id="category-wrapper">
        <h2 className="text-xl text-slate-300 font-bold mb-2">
          Add New Category
        </h2>

        <form className="bg-slate-700 p-4 rounded-xl flex flex-col gap-y-4">
          <div>
            <label
              htmlFor="category-title"
              className="block mb-1 w-2 text-slate-400"
            >
              title
            </label>
            <input
              className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full md:w-auto"
              type="text"
              id="category-title"
              name="title"
              value={categoryFormData.title}
              onChange={changeHandler}
            />
          </div>
          <div>
            <label
              htmlFor="category-description"
              className="block mb-1 text-slate-400"
            >
              description
            </label>
            <textarea
              className="bg-transparent rounded-xl border border-slate-500 text-slate-400 w-full"
              type="text"
              id="category-description"
              name="description"
              value={categoryFormData.description}
              onChange={changeHandler}
            ></textarea>
          </div>

          <div className="flex items-center justify-between gap-x-4">
            <button
              id="cancel-add-category"
              className="flex-1 border border-slate-400 text-slate-400 rounded-xl py-2"
            >
              Cancel
            </button>
            <button
              id="add-new-category"
              className="flex-1 bg-slate-500 text-slate-200 rounded-xl py-2"
              onClick={addNewCategoryHandler}
            >
              Add Category
            </button>
          </div>
        </form>
      </div>

      <p
        id="toggle-add-cetegory"
        onClick={() => setIsShow((prevState) => !prevState)}
        className={`text-slate-300 text-lg mb-4 font-medium hover:cursor-pointer ${
          isShow && "hidden"
        }`}
      >
        Add new Category?
      </p>
    </section>
  )
}

export default CategoryForm
