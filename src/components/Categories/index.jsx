import CategoriesList from "./CategoriesList"
import CategoryInput from "./CategoryInput"

const Categories = ({categories = [], setCategories}) => {
    return (
        <div>
            <CategoryInput
            categories={categories}
            setCategories={setCategories}
            />
            <br />
            <CategoriesList categories={categories}/>
        </div>
    )
}

export default Categories