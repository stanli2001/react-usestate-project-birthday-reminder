import React from "react";
import data from "./birthdaydata";
import BirthdayList from "./BirthdayList";

function App() {
  const [people, setPeople] = React.useState(data);  
  const refreshPage = () => {
    window.location.reload();
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
