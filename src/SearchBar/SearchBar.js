import { Card, Row, Col, Input } from "antd";
import Search from "antd/lib/input/Search";
import React from "react";

export const SearchBar = ({ performSearch, style }) => {
    return (
        <Card style={{ paddingTop: '0px', paddingBottom: '0px' }}
            bordered={false}
        >
            <Input placeholder="input search text"
                // enterButton="Search"
                size="middle"
                placeholder="Search "
                style={{
                    height: '50px',
                    paddingLeft: '30px',
                    paddingRight: '30px',
                    fontSize: '20px',
                    borderColor: '#00375B',
                    borderWidth: '1px',
                    borderRadius: '2px'
                }}
                onPressEnter={(e) => performSearch(e)} />
        </Card>
    )
}