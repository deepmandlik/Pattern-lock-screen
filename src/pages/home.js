import React, { useState } from "react";
import "../App.css";
import SetPattern from "./setPattern";
import ConfirmPattern from "./confirmPattern";

function Home() {
  const [selectedPattern, setSelectedPattern] = useState([]);
  const [pattern, setPattern] = useState([]);
  return (
    <div>
      {!selectedPattern.length ? (
        <SetPattern setSelectedPattern={setSelectedPattern} pattern={pattern} setPattern={setPattern} />
      ) : (
        <ConfirmPattern selectedPattern={selectedPattern} pattern={pattern} setPattern={setPattern} />
      )}
    </div>
  );
}

export default Home;
