import React from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import { Card, Row, Col, Input } from "antd";

const style = {

    width: '50vw',
    left: '25vw',
    top: '20vh',
    height: '50vh',
    justifyContent: 'center',
    alignItems: 'center',
}


export const SearchPage = (props) => {
    const { performSearch } = props;
    return (
        <div style={{ width: '100vw', height: '100vh' }}>
            <Card style={style}
                bordered={false}
            >

                <h1
                    style={{ fontSize: '62px', color: '#00375B', margin: '0px', paddingLeft: '24px', paddingRight: '24px' }}
                >Fareye Search</h1>



                <div >

                    <SearchBar performSearch={performSearch}></SearchBar>
                </div>
                <h3
                    style={{ fontSize: '20px', paddingLeft: '24px', paddingRight: '24px', textAlign: 'right' }}

                >
                    Everything at one place

                </h3>
            </Card>





        </div>
    )

}