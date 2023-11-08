import { useState } from "react";


const BrowseInput = () => {
    const [inputValue,setInputValue] = useState("")
    
    const handleChangeInput = (event)=>{
        setInputValue(event.target.value)
    }




  return (
    <>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Buscar Producto"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          value={inputValue}
          onChange={handleChangeInput}
        />
        <button
          className="btn btn-success"
          type="button"
          id="button-addon2"
          
        >
          Buscar
        </button>
        <p>{inputValue}</p>
      </div>
    </>
  );
};

export default BrowseInput;
