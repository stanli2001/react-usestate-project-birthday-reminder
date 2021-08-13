import React from "react";

const Birthday = ({ person }) => {
  const { name, image, DOB, dobmonth } = person;
  const getAge = (dob) => {
    // [1] new Date(dateString)
    const birthday = new Date(dob); // transform birthday in date-object

    // diff = now (in ms) - birthday (in ms)
    // diff = age in ms
    const diff = Date.now() - birthday.getTime();

    // [2] new Date(value); -> value = ms since 1970
    // = do as if person was born in 1970
    // this works cause we are interested in age, not a year
    const ageDate = new Date(diff);

    // check: 1989 = 1970 + 19
    // console.log(ageDate.getUTCFullYear()); // 1989

    // age = year if person was born in 1970 (= 1989) - 1970 = 19
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
  console.log(getAge(DOB));
  const age = getAge(DOB);
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
