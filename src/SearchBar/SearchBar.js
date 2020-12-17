import React from "react";

export const SearchBar = ({performSearch,handleSearchTextChange})=>{
   return(
       <div>
            <h1>Hey from search</h1>
            <input type="text" onChange={(e)=>handleSearchTextChange(e.target.value)}></input>
            <button onClick={()=>performSearch()}>Daba de</button>
       </div>
    
   )
}