import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import ErrorMessage from "../Common/ErrorMessage";
import Deck from "./Deck";
import {listDecks} from "../utils/api";

function DeckList(){
    
    const [decks, setDecks]= useState([]);
    const [refresh, setRefresh]= useState(false);
    const [error, setError]= useState();

    useEffect (()=>{
        const abort = new AbortController();
        
        listDecks(abort.signal)
        .then(setDecks)
        .catch(setError);

        return ()=> abort.abort;
    }, [refresh]);

    if (error){
        return <ErrorMessage error={error} />;  
    }

    const list= decks.map((deck)=>{
        return(
            <li key={deck.id} >
              <Deck deck={deck} refresh={refresh} setRefresh={setRefresh}/>  
            </li>
        );
    });

    return (
        <main>
            <Link to="/decks/new" className="btn btn-primary">+ Create Deck</Link>
            <ul className="list-group mt-2 deck-list" style={{listStyleType: "none"}}>
                {list}
            </ul>
        </main>
    );
}

export default DeckList;