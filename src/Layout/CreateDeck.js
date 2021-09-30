import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { createDeck } from "../utils/api";
import ErrorMessage from "../Common/ErrorMessage";
import NavBar from "../Common/NavBar";
import DeckForm from "../Common/DeckForm";

function CreateDeck() {
    const [deck, setDeck] = useState({name:"", description:""});
    const [error, setError]= useState();
    const history = useHistory();

    const handleChange = (event) => {
    setDeck({ 
        ...deck, 
        [event.target.name]: event.target.value });
    };

    const handleSubmit =(event) => {
        event.preventDefault();
         async function createNewDeck (){
             const newDeck= await createDeck(deck);
             return newDeck;
         } 
        createNewDeck().then(response=>history.push(`/decks/${response.id}`)).catch(setError);
        
    };

    const handleCancel = () =>{
        history.push("/")
    }

    if (error){
        return <ErrorMessage error={error} />;  
    }

    const navLinks= [
        {dir: `/`,
        label: "Home"},
        {dir: `/decks/new`,
        label: `Create Deck`},
        
    ];

    return (
        <div className="container">
            <NavBar links={navLinks}/>
            <h1>Create Deck</h1>
            <DeckForm
            deck={deck}
            handleCancel={handleCancel}
            handleSubmit={handleSubmit}
            handleChange={handleChange}
        />
        </div>
    );
 }

export default CreateDeck;