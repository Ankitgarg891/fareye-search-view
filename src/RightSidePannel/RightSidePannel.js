import React from 'react';

export const RightSidePannel = ({entity})=>{
    const {title, description, bodyText, externalLink, date} = entity;
    return(
        <div style={{background:"red"}}>
            <h1>{title}</h1>
            <h4>{description}</h4>
            <p>{bodyText}</p>
            <a href={externalLink}>Show Original</a>
            <small>{date}</small>
        </div>
    )
}