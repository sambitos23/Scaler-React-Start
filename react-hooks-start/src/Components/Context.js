import React, { useState, createContext, useContext } from "react";

const userContext = createContext([
  {
    firstName: "meghna",
    secondName: "yadav",
    suffix: 1,
    email: "meghna.yadav@scaler.com",
  },
  (obj) => obj, // so we have to create a object and a function.
]);
// give a default object. If provider does not have any state this object will be used as default state.

const LevelFive = () => {
  const [user, setUser] = useContext(userContext);
  // here user is an array of objects. and setUser is a function.
  return (
    <div>
      <h5>Level 5</h5>
      <div>{user.firstName}</div>
      <div>{`${user.firstName} ${user.secondName} the great ${user.suffix} was born`}</div>
      <button
        onClick={() => {
          setUser(Object.assign({}, user, { suffix: user.suffix + 1 }));
        }}
      >
        Increment
      </button>
    </div>
  );
};

const LevelFour = () => {
  return (
    <div>
      <h4>Level 4</h4>
      <LevelFive />
    </div>
  );
};

const LevelThree = () => {
  return (
    <div>
      <h3>Level 3</h3>
      <LevelFour />
    </div>
  );
};

const LevelTwo = () => {
  return (
    <div>
      <h2>Level 2</h2>
      <LevelThree />
    </div>
  );
};

const ContextComponent = () => {
  const userState = useState({
    firstName: "tony",
    secondName: "stark",
    suffix: 1,
    email: "iron.man@marvel.com",
  });
  return (
    <userContext.Provider value={userState}>
      <>
        <h1>Level 1</h1>
        <LevelTwo />
      </>
    </userContext.Provider>
  );
};

export default ContextComponent;
