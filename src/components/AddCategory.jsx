import  { useState } from 'react'






export const AddCategory = ({OnNewCategory}) => {


    const [imputCategory, setimputCategory] = useState('  ')  ;



  const onSubmit = (event) => {
    event.preventDefault();
   
   
    if (imputCategory.trim().length <= 1) return;
    OnNewCategory( imputCategory);
    setimputCategory('');
    
  }

  return (

    <form onSubmit={onSubmit}>
      <input type="text"
        id='categoryimput'
        value={imputCategory}
        onChange={(e) => setimputCategory(e.target.value)}

        placeholder="Nombre Categoria" />
    </form>
  )
}


