import React from "react";
import { SearchResultCard } from "./SearchResultCard/SearchResultCard";
import { Row, Col, Table } from "antd";


export const SearchResultList = (props) => {
    const { resultList, handleCardClick } = props;

    return (<div>

        {resultList.map(result =>
            <SearchResultCard
                handleCardClick={() => handleCardClick(result)}
                key={result.id}
                searchEntity={result}>
            </SearchResultCard>)}




    </div>



    )
}