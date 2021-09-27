import React, {useState, useEffect} from "react";
import {useParams, Link} from "react-router-dom";

import NotEnoughCards from "./NotEnoughCards";
import FlashCard from "./FlashCard";
import NavBar from "../Common/NavBar";
import {readDeck, listCards} from "../utils/api";

function Study(){
    const initialDisplay={
        front: true,
        current: 1
    };

    const {deckId} =useParams();
    const [deck, setDeck]= useState({});
    const [cards, setCards] = useState([]);
    const [displayCard, setDisplayCard]= useState(initialDisplay);

    const [error, setError] = useState({});

    useEffect(()=>{
        const abort = new AbortController();
        readDeck(deckId, abort.signal).then(setDeck).catch(setError);

        return ()=> abort.abort();
    }, [deckId]);

    useEffect(() => {
        const abort = new AbortController();

        listCards(deckId, abort.signal).then(setCards).catch(setError);

        return ()=> abort.abort();
    }, []);
    console.log(cards);
    const length =cards.length-1;
    

    return (
        <div>
            <NavBar />
            <h1>{deck.name}: Study</h1>
            {length<2 ? 
            (<NotEnoughCards deck={deck} cards={cards} />)
            :
            (<FlashCard 
            cards={cards}
            displayCard={displayCard} 
            setDisplayCard={setDisplayCard}  
            initialDisplay={initialDisplay} />)}
        </div>
    );
}

export default Study;