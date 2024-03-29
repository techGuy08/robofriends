import React from "react";


const Card = ({ id, name, email }) => {
  return (
    <div className="card tc bg-light-blue dib br3 pa3 na2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${id}?200x200`} alt="robots" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
