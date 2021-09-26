import React from "react";
import { Link, useHistory } from "react-router-dom";
import { deleteDeck } from "../utils/api";

function Deck({deck}){
    const history= useHistory();
    const cardNum= deck.cards.length;

    const handleDelete = ()=>{
        if(window.confirm("Are you sure you want to delete this deck?")){
            deleteDeck(deck.id);
            history.go(0);
        }
    };

    const key=deck.id.toString();
    

    return (
        <div className="border">
            <li key={`${key}`}>
                <h3>{deck.name}</h3>
                <p>{cardNum} cards</p>
                <p>{deck.description}</p>
                <Link to={`decks/${deck.id}`} className="btn btn-primary">View</Link>

                <Link to={`decks/${deck.id}/study`} className="btn btn-primary">Study</Link>
                
                <Link to={`decks/${deck.id}/edit`} className="btn btn-primary">Edit</Link>

                <button type="button" className="btn btn-danger" onClick={handleDelete}><span className="oi oi-trash"></span>Delete</button>
            </li>
        </div>
    );
}
 export default Deck;
