import React, {useEffect, useState} from "react";
import ErrorMessage from "../Common/ErrorMessage";
import Card from "./Card";
import {listCards} from "../utils/api";


const CardList = ({deckId, deck}) => {
    //const cards =deck.cards;
    //console.log(cards);
    /*const [realCards, setRealCards]= useState([]);
    const [error, setError] = useState();

    useEffect(() => {
        const abort = new AbortController();

        listCards(deckId, abort.signal).then(setRealCards).catch(setError);

        return ()=> abort.abort();
    }, [deckId, cards]);

    if(error){
        return <ErrorMessage error={error} />;
    }*/

    const list = deck.cards.map((card)=> {
        return(
            <li key={`card${card.id}`}>
                <Card card={card} />
            </li>
        );
    });

    return(
        <div>
            <ul style={{listStyleType: "none"}}>{list}</ul>
        </div>
    );

};

export default CardList;