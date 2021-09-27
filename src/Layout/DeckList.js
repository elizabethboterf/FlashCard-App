import React, {useEffect, useState} from "react";
import {Link, useRouteMatch} from "react-router-dom";
//import ErrorMessage from "../common/ErrorMessage";
import Deck from "./Deck";
import {listDecks} from "../utils/api";

function DeckList(){
    const {url, path}=useRouteMatch();
    
    const [decks, setDecks]= useState([]);
    const [error, setError]= useState(undefined);

    useEffect (()=>{
        const abort = new AbortController();
        
        listDecks(abort.signal)
        .then(setDecks)
        .catch(setError);

        return ()=> abort.abort;
    }, []);

    //if(error) return (<ErrorMessage error={error} />);

    const list= decks.map((deck)=>(
        <Deck deck={deck} />
    ));

    return (
        <main>
            <Link to="/decks/new" className="btn btn-primary">+ Create Deck</Link>
            <ul>
                {list}
            </ul>
        </main>
    );
}

export default DeckList;