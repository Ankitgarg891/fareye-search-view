import React from "react";
import {SearchBar} from "../SearchBar/SearchBar";
import SearchResultList from "../SearchResultList/SearchResultList";

class SearchPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searchText:""
        }
    }

    handleSearchTextChange= (searchText)=>{
        this.setState({searchText});
    }

    performSearch = ()=>{
        console.log(this.state.searchText)
    }

    render(){
        return (
            <div>
                <h1> 
                    Hey there search page {this.state.searchText}
                </h1>
                <SearchBar performSearch={this.performSearch}
                handleSearchTextChange={this.handleSearchTextChange}></SearchBar>
                <SearchResultList></SearchResultList>
            </div>
        )
    }
}
export default SearchPage;