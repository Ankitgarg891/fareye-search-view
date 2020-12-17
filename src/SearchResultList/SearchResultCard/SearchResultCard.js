import React from "react";

export const SearchResultCard = (props)=>{
    const {title, description, date} = props.searchEntity;
    return(
        <div style={{cursor:"pointer"}} onClick={()=>props.handleCardClick(props.searchEntity)}>
            <h1>{title}</h1>
            <p>{description}</p>
            <small>{date}</small>
        </div>
    );
}