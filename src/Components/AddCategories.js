import { useState } from "react";
import PropsTypes from "prop-types";

const AddCategories = ({setCategories})=>{
console.log("Segundo");
const [inputValue, setInputValue] = useState("Hola mundo");
const hundleSubmit = (e)=>{
    e.preventDefault(); 

    if(inputValue.trim().length >2 ){
        setCategories(cats => {
            if(!cats.includes(inputValue)){
                return [inputValue, ...cats]
            }
            return [...cats]
        })
        
        
        setInputValue("")
    }
}

    return (
        <form onSubmit={hundleSubmit}>
            <input 
                type="text"
                onChange={(e)=>setInputValue(e.target.value)}
                value={inputValue}
            />
            
        </form>
    )
}

AddCategories.propTypes ={
    setCategories: PropsTypes.func.isRequired,
}

export default AddCategories;

