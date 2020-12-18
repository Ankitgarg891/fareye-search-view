import React from "react";
import { Card, Row, Col, Input } from "antd";
const color1 = (type) => {
    switch (type) {
        case "RCA":
            return "#d35400";

        case "Document":
            return "#8e44ad";

        case "Freshdesk":
            return "#3498db";
    }
}


// "id": "5fdca6062a25eeca155e31ce",
//         "description": " Hi L3\, Issue Description\:\- Getting error while adding the process through reverse connector.Client / Customer:- SRL",
//         "type": "RCA",
//         "title": "Getting error while adding the process through reverse connector",
//         "info": "Hello, undefined! You have 1 unread messages.",
//         "lastUpdatedAt": "2019-01-08T11:08:32 -00:00",
//         "externalUrl": "http://placehold.it/32x32"



export const SearchResultCard = (props) => {
    const { id, title, description, type, info, lastUpdatedAt, externalUrl } = props.searchEntity;
    return (

        <Row style={{ marginBottom: "12px" }}>
            <Col span={1} style={{ backgroundColor: color1(type) }}>
            </Col>
            <Col span={23}>
                <Card
                    hoverable={true}
                    style={{ textAlign: 'left' }}
                >
                    <h1 style={{
                        size: "24px",
                        // hoverable : ""                    
                    }}
                        onClick={() => props.handleCardClick(props.searchEntity)
                        }

                    >{title}</h1>
                    <p>{description}</p>
                    <small>{lastUpdatedAt}</small>


                </Card>
            </Col>
        </Row>


    );
}