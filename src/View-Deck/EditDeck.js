import React, {useState, useEffect} from "react";
import {useHistory, useParams} from "react-router-dom";
import ErrorMessage from "../Common/ErrorMessage";
import NavBar from "../Common/NavBar";
import DeckForm from "../Common/DeckForm";
import { updateDeck, readDeck} from "../utils/api";

function EditDeck (){
    const {deckId}=useParams();
    const history=useHistory();
    const [deck, setDeck]= useState({});
    const [error, setError] = useState();
    
    useEffect(()=>{
        const abort = new AbortController();
        readDeck(deckId, abort.signal).then(setDeck).catch(setError);

        return ()=> abort.abort();
        
    }, [deckId]);

    const handleChange = (event) => {
        const value = event.target.value;
          setDeck({
            ...deck,
            [event.target.name]: value,
          });
        };

    const handleSubmit = (event) => {
            event.preventDefault();
            updateDeck(deck);
            
            history.goBack();
    };

    const handleCancel=()=>{
        history.goBack();
    };

    if (error){
        return <ErrorMessage error={error} />;  
    }

    const navLinks= [
        {dir: `/`,
        label: "Home"},
        {dir: `/decks/${deckId}`,
        label: `${deck.name}`},
        {dir: `decks/${deckId}/edit`,
        label: "Edit Deck"}
    ];
    
    return (
        <main>
            <NavBar links={navLinks} />
            <h1>Edit Deck</h1>
            <div className="container">
                <DeckForm deck={deck} 
                handleChange={handleChange} handleSubmit={handleSubmit} handleCancel={handleCancel} /> 
            </div>
        </main>
    );
}

  export default EditDeck;