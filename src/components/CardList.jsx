import React from "react";
import Card from "./Card";


const CardList = ({ robots }) => {
    return <div className="tc">
        {robots.map((el,i) => (
            <Card key={i} id={el.id} name={el.name} email={el.email} />
        ))}
    </div>

}

export default CardList;