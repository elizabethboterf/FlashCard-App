import React, {useEffect, useState} from "react";
import Card from "./Card";
import {listCards} from "../utils/api";


const CardList = ({deckId}) => {
    const [cards, setCards]= useState([]);
    const [error, setError] = useState(undefined);

    useEffect(() => {
        const abort = new AbortController();

        listCards(deckId, abort.signal).then(setCards).catch(setError);

        return ()=> abort.abort();
    }, []);

    /*if(error){
        return <ErrorMessage error={error} />;
    }*/

    const list = cards.map((card)=> <Card card={card} />);

    return(
        <div>
            <section>{list}</section>
        </div>
    );

};

export default CardList;