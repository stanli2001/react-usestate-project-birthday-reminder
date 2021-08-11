import React from "react";

const Birthday = ({ person }) => {
  const { age, name, image } = person;
  return (
    <>
      <img src={image} alt={name} />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </>
  );
};

export default Birthday;
