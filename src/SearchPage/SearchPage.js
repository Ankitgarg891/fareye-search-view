import React from "react";
import { SearchBar } from "../SearchBar/SearchBar";

export const SearchPage = (props) => {
    const {performSearch} = props;
    return (
        <div style={{maxWidth:"50vW"}}>
            <SearchBar performSearch={performSearch}></SearchBar>
        </div>
    )

}