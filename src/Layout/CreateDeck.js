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

    const handleSubmit = async (event) => {
        event.preventDefault();
         async function createNewDeck (){
             const abort= new AbortController();
             const newDeck= await createDeck(deck, abort.signal);
             console.log(newDeck);
             const id=newDeck.id;
             setDeck({
                 ...deck,
                 id: id});
             return ()=> abort.abort();
         } 
         //const newDeck= await createDeck(deck);
         //setDeck(newDeck);
        //console.log(newDeck);
        //setDeck(newDeck);git push origin main
         await createNewDeck();
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