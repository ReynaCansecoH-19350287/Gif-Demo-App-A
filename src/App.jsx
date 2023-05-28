import { useState } from 'react'
import Categories from './components/Categories'
import GifsExpo from './components/GifsExpo'

function App() {
  const [categories, setCategories] = useState(["Mario Bross", "Girasoles"])

  return (
    <div className='m-5'>
      <h3>Gif Demo App</h3>
      <hr/>
      <Categories 
      categories={categories} 
      setCategories={setCategories} 
      />
      <hr />
      <GifsExpo 
      categories={categories} 
      setCategories={setCategories}
      />
      {
        categories.length === 0 && (
          <div className='text-center'>
            <h3>Your list is empty</h3>
            Add a new category to get started.
          </div>
        )
      }
    </div>
  )
}

export default App