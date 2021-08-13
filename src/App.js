import React, { useState, useEffect } from "react";
import data from "./birthdaydata";
import BirthdayList from "./BirthdayList";

function App() {
  const [people, setPeople] = useState(data);
  //Exact Month from DOB
  const getMonth = (date) => {
    const birthday = new Date(date);
    return birthday.getMonth();
  };
  //Exact Day from DOB
  const getDay = (date) => {
    const birthday = new Date(date);
    return birthday.getDate();
  };
  //Add Month and Day of DOB to the person array
  //Create filtered array, which is the list of person whose birthday is today
  //return the filtered array for display
  const filterPeople = (peopledata) => {
    const newPeople = peopledata.map((person) => ({
      ...person,
      dobmonth: getMonth(person.DOB),
      dobday: getDay(person.DOB),
    }));
    let today = new Date();
    let filteredPeople = newPeople.filter(
      (person) =>
        person.dobmonth === today.getMonth() &&
        person.dobday === today.getDate()
    );

    setPeople(filteredPeople);
  };

  useEffect(() => {
    filterPeople(data);
  },[]);
  const refreshPage = () => {
    filterPeople(data);
    // window.location.reload();
  };
  return (
    <main>
      <section className="container">
        <h3> {people.length} birthdays today</h3>
        <BirthdayList people={people} />
        <button
          onClick={() => {
            setPeople([]);
          }}
        >
          Clear All
        </button>
        <button onClick={refreshPage}>Restore</button>
      </section>
    </main>
  );
}
export default App;
