import React, {useEffect, useState} from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { deleteCard, readCard } from "../utils/api";

const Card = ({card, refresh, setRefresh}) =>{
    const {url}= useRouteMatch();
    //const [realCard, setRealCard]= useState({});
    const [error, setError]= useState();
    console.log(card);

    /*useEffect(()=>{
        const abort = new AbortController();
        readCard(card.id, abort.signal)
            .then(setRealCard)
            .catch(setError)

    }, []);*/


    const handleDelete=(event)=>{
        if(window.confirm("Are you sre you want to delete this card?")){
        deleteCard(card.id);
        setRefresh(!refresh);
        }
    };

    return (
        <div className="container" style={{margin: "10px", padding: "8px"}}>
            <div className="row" >
                <div className="col">
                    {card.front}
                </div>
                <div className="col">
                    {card.back}
                </div>
            </div>
            <Link to={`${url}/cards/${card.id}/edit`} className="btn btn-primary">Edit</Link>
            <button type="button" onClick={handleDelete} className="btn btn-danger"><span className="oi oi-trash"></span>Delete</button>
        </div>
    );
}

export default Card;