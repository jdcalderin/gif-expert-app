import  { useState } from 'react';
import {AddCategory, GifGrid} from './components';


const GifExpertApp = () => {

  const [categories, setcategories] = useState([])

   const onAddCategory = (newCategory) => {
    

    if(categories.filter(category => category.toLowerCase() === newCategory.toLowerCase()).length > 0) return;
    setcategories([newCategory, ...categories]);
  }



//  const [categories, setcategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball'])
  return (
    <>
      <h2>GifExpertApp</h2>

      <AddCategory OnNewCategory={onAddCategory}  />
   
      
        {categories.map(category => (
           <GifGrid key={category} 
           category={category} />

        ))}
       
     
    </>
  )
}

export default GifExpertApp
