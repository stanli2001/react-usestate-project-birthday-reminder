import React from "react";
import Birthday from "./Birthday";

const BirthdayList = ({ people }) => {
  return (
    <>      
      {people.map((person) => {        
        return (
          <article key={person.id} className="person">
            <Birthday person={person} />
          </article>
        );
      })}
    </>
  );
};

export default BirthdayList;
