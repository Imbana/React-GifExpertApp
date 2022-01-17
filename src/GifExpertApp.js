import React, { useState } from 'react'
import AddCategories from './Components/AddCategories'
import GifGrid from './Components/GifGrid'

const cat = ["Rinck and Morty"] 
  

const GifExpertApp = () => {
 const [categories, setCategories] = useState(cat)

/*  const hundleAdd = ()=>{
    //setCategories([...categories, "HunterXHunter"]);
    setCategories(cats => [..cats, "Hector"])
 } */
 console.log("Primero");
     return (
        <div>
           <h2>GifExpertApp</h2>
           <hr /> 
           <AddCategories setCategories={setCategories}/>
           <ol>
                {
                    categories.map(item => (
             
                        <GifGrid key={item} category={item}/>
                                            
                     )     
                    )
                }
            </ol>
        </div>
    )
}

export default GifExpertApp
