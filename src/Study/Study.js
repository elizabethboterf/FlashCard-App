import React, {useState, useEffect, Fragment} from "react";
import {useParams} from "react-router-dom";
import ErrorMessage from "../Common/ErrorMessage";
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
    const [deck, setDeck]= useState({name: 'loading', cards:[]});
    const [cards, setCards] = useState([]);
    const [displayCard, setDisplayCard]= useState(initialDisplay);
    const [error, setError] = useState();

    // /*function makeStates(deck){
    //     setDeck(deck);
    //     setCards(deck.cards);
    //     };
        
    useEffect(()=>{
        const abort = new AbortController();
        readDeck(deckId, abort.signal)
            .then((deck)=>{
                console.log(";;",deck);
                setDeck(deck);
            })
            .catch(setError);

        return ()=> abort.abort();
    }, [deckId]);

    // useEffect(() => {
    //     const abort = new AbortController();

    //     listCards(deckId, abort.signal).then(setCards).catch(setError);

    //     return ()=> abort.abort();
    // }, [deckId]);

    
    if (error){
        return <ErrorMessage error={error} />;  
    }
    
    //const length = deck ? deck.cards.length-1 : 0;
    const navLinks= [
        {dir: `/`,
        label: "Home"},
        {dir: `/decks/${deckId}`,
        label: `${deck.name}`},
        {dir: `decks/${deckId}/study`,
        label: "Study"}
    ];

        return (
            <Fragment>
                <NavBar links={navLinks} />
                <h1>{deck.name}: Study</h1>
                {deck.cards.length<3 ?
                (<NotEnoughCards deck={deck}  />)
                :
                (<FlashCard 
                cards={deck.cards}
                displayCard={displayCard} 
                setDisplayCard={setDisplayCard}  
                initialDisplay={initialDisplay} />)}
            </Fragment>
        );
    
}

export default Study;