import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { createDeck, readDeck } from "../utils/api";
//import NavBar from "./Common/NavBar";
import DeckForm from "../Common/DeckForm";

function CreateDeck() {
/* Create Deck Page */
    const [deck, setDeck] = useState({});
    const history = useHistory();

    const handleChange = (event) => {
    setDeck({ 
        ...deck, 
        [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await createDeck(deck).then(setDeck).then(history.push(`/`)); // send user to home page after create deck 
    };

    //const breadCrumbLinks = [{ dir: "/decks/new", label: "Create Deck" }];

    const handleCancel = () =>{
        history.push("/")
    }

    return (
        <div className="container">
       

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