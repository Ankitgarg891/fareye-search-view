import React from "react";
import { RightSidePannel } from "../RightSidePannel/RightSidePannel";
import { SearchBar } from "../SearchBar/SearchBar";
import { SearchPage } from "../SearchPage/SearchPage";
import { SearchResultList } from "../SearchResultList/SearchResultList";
import { HomeOutlined } from "@ant-design/icons"
import { Row, Col } from "antd";
import { mainContainerSearvice } from "./MainContainerService";
const typeConstants = {

    RCA: "RCA",
    Document: "Document",
    Freshdesk: "Freshdesk",
}

// "id": "5fdca6062a25eeca155e31ce",
//         "description": " Hi L3\, Issue Description\:\- Getting error while adding the process through reverse connector.Client / Customer:- SRL",
//         "type": "RCA",
//         "title": "Getting error while adding the process through reverse connector",
//         "info": "Hello, undefined! You have 1 unread messages.",
//         "lastUpdatedAt": "2019-01-08T11:08:32 -00:00",
//         "externalUrl": "http://placehold.it/32x32"


class MainContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchPerformed: false,
            searchText: "",
            searchResults: []
        }
    }

    performSearch = async (searchText) => {
        this.setState({ searchPerformed: true })
        var searchResults = await mainContainerSearvice.performSearch(searchText);
        this.setState({searchResults});
        console.log(searchText)
    }

    renderSearchPage = (searchText) => {
        return (<SearchPage performSearch={(e)=>this.performSearch(e.target.value)}></SearchPage>)
    }

    handleCardClick = (sidePanelEntity) => {
        this.setState({ sidePanelEntity });
    }


    renderResultPage = () => {
        return (
            <div>


                {/* header div */}
                <div style={{ height: '17vh' }}>

                    <Row>
                        <Col span={2} >

                            <HomeOutlined style={{ fontSize: '30px', padding: '24px', margin: '10px' }} onClick={() => this.setState({ searchPerformed: false })} />
                        </Col>



                        <Col span={12}>
                            <SearchBar style={{ maxWidth: "40vW" }} performSearch={this.performSearch}></SearchBar>


                        </Col>
                    </Row>

                </div>


                {/* body div */}
                <div style={{ height: '83vh', overflowY: 'scroll' }}>

                    <Row>
                        <Col span={2} ></Col>
                        <Col span={14} style={{ padding: '24px' }}>


                            <SearchResultList resultList={this.state.searchResults} handleCardClick={this.handleCardClick}>

                            </SearchResultList>


                        </Col>


                        <Col span={8}>
                            {this.state.sidePanelEntity ? <RightSidePannel entity={this.state.sidePanelEntity}></RightSidePannel> : null}


                        </Col>
                    </Row>







                </div>




            </div>)
    }

    render() {
        return (
            this.state.searchPerformed ? this.renderResultPage() : this.renderSearchPage()
        )
    }
}
export default MainContainer;