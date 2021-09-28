import React, {useEffect, useState} from "react";
import ErrorMessage from "../Common/ErrorMessage";
import Card from "./Card";
import {listCards} from "../utils/api";


const CardList = ({deckId}) => {
    const [cards, setCards]= useState([]);
    const [error, setError] = useState();

    useEffect(() => {
        const abort = new AbortController();

        listCards(deckId, abort.signal).then(setCards).catch(setError);

        return ()=> abort.abort();
    }, [deckId]);

    if(error){
        return <ErrorMessage error={error} />;
    }

    const list = cards.map((card)=> {
        return(
            <li key={card.id}>
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