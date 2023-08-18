import React from "react";

const Logo = () => {
  return <h1>🏖️ Far Away 💼</h1>;
};

const Form = () => {
  return (
    <div className="add-form">
      <h3>What do you need for your 🥰 trip</h3>
    </div>
  );
};

const Packing = () => {
  return <div className="packing-list">LIST</div>;
};

const Stats = () => {
  return (
    <footer>
      <em>You have X items on your list, and you already packed X (X%)</em>
    </footer>
  );
};

const App = () => {
  return <div className="app">
    <Logo />
    <Form />
    <Packing />
    <Stats />
  </div>;
};

export default App;
