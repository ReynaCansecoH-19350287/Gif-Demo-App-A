import { useState } from "react"

const CategoryInput = ({categories = [], setCategories}) => {
    const [inputValue, setInputValue] = useState("")

    const handleInputChange = ({target}) =>{
        setInputValue(target.value)
    }

    const handleAddCategoryButton = () => {
        setCategories([inputValue, ...categories])
        setInputValue("")
    }

    const handleClearList = () => {
        setCategories([])
    }

    return (
        <div>
            <input
            onChange={(e)=> handleInputChange(e)}
            placeholder="Write Category name"
            type="text"
            value={inputValue}
            />
            <button
            onClick={(e)=> handleAddCategoryButton(e)}
            className="btn btn-success btn-sm ms-2 mb-1"
            type="button"
            >
                Add
            </button>
            <button
            onClick={(e)=> handleClearList(e)}
            className="btn btn-danger btn-sm ms-2 mb-1"
            type="button"
            >
                Clean
            </button>
        </div>
    )
}

export default CategoryInput