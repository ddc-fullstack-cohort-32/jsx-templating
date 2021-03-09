import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/Button";

export function PostCard(props) {

    const {misquote} = props


    return(
        <>
            <Card className="card text-center">
                <div className="card-body">
                    <Card.Title>{misquote.misquoteAttribution}</Card.Title>
                    <Card.Text >
                       <div>
                           {misquote.misquoteContent}
                       </div>
                        <small className="text-muted">{misquote.misquoteSubmitter}</small>
                    </Card.Text>
                </div>
            </Card>
        </>
            )
}
