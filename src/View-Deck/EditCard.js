import React, {useState, useEffect} from "react";
import {useHistory, useParams} from "react-router-dom";
import NavBar from "../Common/NavBar";
import CardForm from "../Common/CardForm";
import { updateCard, readCard} from "../utils/api";

function EditCard (){
    const history=useHistory();
    const {deckId, cardId}=useParams();

    const [card, setCard]= useState();
    const [error, setError] = useState();

    useEffect(async()=>{
        const abort = new AbortController();
        await readCard(cardId, abort.signal).then(setCard).catch(setError);

        return()=> abort.abort();
    }, [])

    const handleChange = (event) => {
        const value = event.target.value;
          setCard({
            ...card,
            [event.target.name]: value,
          });
        };

    const handleSubmit = (event) => {
            event.preventDefault();
            updateCard(card);
            
            history.push(`/decks/${deckId}`);
        
    };

    const handleCancel=()=>{
        history.go(0);
    };

    /*if (error){
        return <ErrorMessage error={error} />;  
    }*/
    console.log(card);
    
    return (
        <main>
            <NavBar />
            <h1>Edit Card</h1>
            <div className="container">
                <CardForm 
                card={card} 
                handleChange={handleChange} handleSubmit={handleSubmit} handleCancel={handleCancel} /> 
            </div>
        </main>
    );
}

  export default EditCard;