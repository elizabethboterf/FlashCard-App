import React, {useState, useEffect} from "react";
import {useHistory, useParams} from "react-router-dom";
import NavBar from "../Common/NavBar";
import DeckForm from "../Common/DeckForm";
import { updateDeck, readDeck} from "../utils/api";

function EditDeck (){
    const {deckId}=useParams();
    console.log(deckId);
    const history=useHistory();
    const [deck, setDeck]= useState();
    const [error, setError] = useState();
    
    useEffect(()=>{
        const abort = new AbortController();
        readDeck(deckId, abort.signal).then(setDeck).catch(setError);

        console.log(error);

        return ()=> abort.abort();
        
    }, []);
    console.log(deck);

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

    /*if (error){
        return <ErrorMessage error={error} />;  
    }*/
    
    return (
        <main>
            <NavBar />
            <h1>Edit Deck</h1>
            <div className="container">
                <DeckForm deck={deck} 
                handleChange={handleChange} handleSubmit={handleSubmit} handleCancel={handleCancel} /> 
            </div>
        </main>
    );
}

  export default EditDeck;