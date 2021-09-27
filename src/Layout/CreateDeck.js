import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { createDeck, readDeck } from "../utils/api";
import NavBar from "../Common/NavBar";
import DeckForm from "../Common/DeckForm";

function CreateDeck() {
    const [deck, setDeck] = useState({});
    const history = useHistory();

    const handleChange = (event) => {
    setDeck({ 
        ...deck, 
        [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
         function Create (){
             const abort= new AbortController();
             createDeck(deck, abort.signal).then(setDeck);
             return ()=> abort.abort();
         } 
        //console.log(newDeck);
        //setDeck(newDeck);
        Create();
        console.log(deck);
        history.push(`/decks/${deck.id}`); // send user to home page after create deck 
    };

    const handleCancel = () =>{
        history.push("/")
    }

    return (
        <div className="container">
            <NavBar />
            <h1>Create Deck</h1>
            <DeckForm
            deck={{name:"Deck Name", description:"Deck Description"}}
            handleCancel={handleCancel}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
        />
        </div>
    );
 }

export default CreateDeck;