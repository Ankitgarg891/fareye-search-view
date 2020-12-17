import React from "react";
import { RightSidePannel } from "../RightSidePannel/RightSidePannel";
import { SearchBar } from "../SearchBar/SearchBar";
import {SearchPage} from "../SearchPage/SearchPage";
import {SearchResultList} from "../SearchResultList/SearchResultList";
import {HomeOutlined} from "@ant-design/icons"

class MainContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searchPerformed:false,
            searchText:"",
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
            ]
        }
    }

    performSearch = (searchText)=>{
        this.setState({searchPerformed:true})
        console.log(searchText)
    }

    renderSearchPage= (searchText)=>{
        return(<SearchPage performSearch={this.performSearch}></SearchPage>)
    }

    handleCardClick = (sidePanelEntity)=>{
        this.setState({sidePanelEntity});
    }


    renderResultPage = ()=>{
        return(
        <div>
            <HomeOutlined onClick={()=>this.setState({searchPerformed:false})}/>
            <SearchBar style={{maxWidth:"40vW"}} performSearch={this.performSearch}></SearchBar>
            <SearchResultList resultList={this.state.searchResults} handleCardClick={this.handleCardClick}></SearchResultList>
            {this.state.sidePanelEntity?<RightSidePannel entity={this.state.sidePanelEntity}></RightSidePannel>:null}
        </div>)
    }

    render(){
        return(
            this.state.searchPerformed ? this.renderResultPage(): this.renderSearchPage()
        )
    }
}
export default MainContainer;