import React from "react";
import { RightSidePannel } from "../RightSidePannel/RightSidePannel";
import { SearchResultCard } from "./SearchResultCard/SearchResultCard";

class SearchResultList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResults: [
                {
                    id: 1,
                    title: "Card1",
                    description: "frwrewdfwfwef",
                    date: new Date().toString()
                },
                {
                    id: 2,
                    title: "Card2",
                    description: "frwrwqe213123ewdfwfwef",
                    date: new Date().toString()
                },
                {
                    id: 3,
                    title: "Card3",
                    description: "frwrewdfwfwef",
                    date: new Date().toString()
                }
            ],
            rightPannelEntity: null
        }
    }

    handleCardClick = (entity)=>{
        this.setState({rightPannelEntity:entity})
    }

    renderRightPannel = (entity) => {
        return (
            entity?<RightSidePannel entity={entity}></RightSidePannel>:null
        )
    }

    render() {
        return <div> {this.state.searchResults.map(result =>
                    <SearchResultCard handleCardClick={this.handleCardClick} key={result.id} searchEntity={result}>
                    </SearchResultCard>)}
                    {this.renderRightPannel(this.state.rightPannelEntity)}
                </div>
    }
}

export default SearchResultList;