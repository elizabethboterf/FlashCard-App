import React from "react";
import { Link, useRouteMatch, useHistory } from "react-router-dom";
import { deleteCard } from "../utils/api";

const Card = ({card}) =>{
    const {url}= useRouteMatch();
    const history=useHistory();

    const handleDelete=()=>{
        if(window.confirm("Are you sre you want to delete this card?")){
        deleteCard(card.id);
        history.go(0);
        }
    };

    return (
        <div className="container" style={{margin: "10px", padding: "8px"}}>
            <div className="row" >
                <div className="col">
                    Front: {card.front}
                </div>
                <div className="col">
                    Back: {card.back}
                </div>
            </div>
            <Link to={`${url}/cards/${card.id}/edit`} className="btn btn-primary">Edit</Link>
            <button type="button" onClick={handleDelete} className="btn btn-danger"><span className="oi oi-trash"></span>Delete</button>
        </div>
    );
}

export default Card;