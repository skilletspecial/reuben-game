import React, { useState, useEffect, useRef }from "react";

import "./Table.css";
import Card from "./Card";

let first = null;
let second = null;

const Table = () => {
    const [cards, setCards] = useState([1,2,3,4]);
    const [firstSelected, setFirstSelected] = useState(null);
    const [secondSelected, setSecondSelected] = useState(null);

    

    const selectCard = (index) => {
        console.log(index);


        if (!first) {
            first = index;
        } else {
            second = index;
        }

        // console.log("first: ", first);
        // console.log("second: ", second);
        setFirstSelected(first);
        setSecondSelected(second);
    }


    return (
        <div>
            <div>first: {firstSelected}</div>
            <div>second: {secondSelected}</div>
            {cards.map((card, i) => (<span key={i} onClick={() => {selectCard(i)}}>
                <Card></Card>
            </span>))}
        </div>
    );
}

export default Table;