import React, {useEffect, useState} from "react";
import {useHistory, useParams } from "react-router-dom";
import NavBar from "./NavBar";
import CardForm from "./CardForm";
import { createCard, readDeck } from "../utils/api";

function AddCard () {
    const history=useHistory();
    const {deckId} = useParams();

    const [card, setCard]= useState({});
    const [deck, setDeck]=useState({});
    const [error, setError] = useState(undefined);
    
    useEffect(()=>{
            const abort = new AbortController();
            readDeck(deckId, abort.signal).then(setDeck).catch(setError);

            return()=> abort.abort();
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

    /*if (error){
        return <ErrorMessage error={error} />;  
    }*/
    
    return (
        <main>
            <NavBar />
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