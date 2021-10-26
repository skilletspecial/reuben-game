import React, { useState, useEffect, useRef }from "react";

import "./Table.css";
import Card from "./Card";

const Table = () => {
    const [cards, setCards] = useState([1,2,3,4,5,6]);
    const [firstSelected, setFirstSelected] = useState(null);
    const [secondSelected, setSecondSelected] = useState(null);

    

    const handleCardClick = (index) => {
        console.log(index);
    }


    return (
        <div className="cards">
            {cards.map((card, i) => (<span key={i} onClick={() => {handleCardClick(i)}}>
                <Card></Card>
            </span>))}
        </div>
    );
}

export default Table;