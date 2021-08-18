import React, { useState } from "react";

const Wish = () => {
  const [show, setShow] = useState(false);
  const [text, setText] = useState("Say Something");
  const clickHandler = () => {
      setShow(!show);
      let tt = !show ? "Good Wish" : "Say Something";
      setText(tt);
  }
  return (
    <>
      <button className="button"
        onClick= {clickHandler}
      >
        {text}
      </button>
      {show && <WishText />}
    </>
  );
};

const WishText = () => {
  return (
    <div className="center">
      <h3>Happy Birthday All!</h3>
    </div>
  );
};

export default Wish;
