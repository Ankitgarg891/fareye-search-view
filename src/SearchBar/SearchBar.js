import { Card } from "antd";
import Search from "antd/lib/input/Search";
import React from "react";

export const SearchBar = ({performSearch,style})=>{
   return(
       <Card style={style}>
            <h1>Fareye Search</h1>
            <Search placeholder="input search text" 
            enterButton="Search" size="middle"  onSearch={(e)=>performSearch(e)}/>
       </Card>
   )
}