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
    </div>
  )
}

export default App