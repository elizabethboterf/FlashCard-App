import React, { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { deleteDeck, readDeck } from "../utils/api";
 
//import EditDeck from "./EditDeck";
//import AddCard from "../Common/AddCard";
import CardList from "./CardsList";
//import Card from "./Card";

function ViewDeck (){
    const {deckId}=useParams();
    const history=useHistory();
    const [deck, setDeck]= useState();
    const [error, setError] = useState();

    useEffect(()=>{
        const abort = new AbortController();
        readDeck(deckId, abort.signal).then(setDeck).catch(setError);

        return ()=> abort.abort();
    }, [deckId]);
    console.log(deck);

    //if(error) return(<ErrorMessage error={error} />);

    const handleDelete = ()=>{
        if(window.confirm("Are you sure you want to delete this deck?")){
            deleteDeck(deck.id);
            history.push("/");
        }
    };
    console.log(deck);
    if(deck){
        return(
            <div>
                <h1>{deck.name}</h1>
                <p>{deck.description}</p>
                <Link to={`/decks/${deck.id}/edit`} className="btn btn-primary" href="#">Edit</Link>
                <Link to={`/decks/${deck.id}/study`} className="btn btn-primary" href="#">Study</Link>
                <Link to={`/decks/${deck.id}/cards/new`} className="btn btn-primary" href="#">Add Card</Link>
                <button type="button" onClick={handleDelete} className="btn btn-danger"><span className="oi oi-trash"></span>Delete</button>

                <div>
                    <h1>Cards</h1>
                    <div className="column">
                        <CardList deckId={deckId}/>
                    </div>
                </div>
            </div>
        );
    }else{
        return("Not Found");
    }
}

export default ViewDeck;
