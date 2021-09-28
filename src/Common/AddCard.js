import React, {useEffect, useState} from "react";
import {useHistory, useParams } from "react-router-dom";
import NavBar from "./NavBar";
import CardForm from "./CardForm";
import ErrorMessage from "../Common/ErrorMessage";
import { createCard, readDeck } from "../utils/api";

function AddCard () {
    const history=useHistory();
    const {deckId} = useParams();
    const [deck, setDeck]= useState({});
    const [card, setCard]= useState({});
    const [error, setError]= useState();

    useEffect(()=>{
        const abort = new AbortController();
        readDeck(deckId, abort.signal).then(setDeck).catch(setError);

        return ()=> abort.abort();
    }, [deckId]);

    const handleChange = (event) => {
        const value = event.target.value;
          setCard({
            ...card,
            [event.target.name]: value,
          });
        };

    const handleSubmit = (event) => {
            event.preventDefault();
            createCard(deckId, card);
            
            history.go(0);
    };

    const handleCancel=()=>{
        history.push(`/decks/${deckId}`);
    };

    if (error){
        return <ErrorMessage error={error} />;  
    }
    const navLinks= [
        {dir: `/`,
        label: "Home"},
        {dir: `/decks/${deckId}`,
        label: `${deck.name}`},
        {dir: `decks/${deckId}/cards/new`,
        label: "Add Card"}
    ]
    
    return (
        <main>
            <NavBar links={navLinks} />
            <h1>Add Card</h1>
            <div className="container">
                <CardForm  
                card={{front:"Front of Card", back:"Back of Card"}}
                handleChange={handleChange} handleSubmit={handleSubmit} handleCancel={handleCancel}/> 
        </div>
        </main>
    );
}
  
export default AddCard;