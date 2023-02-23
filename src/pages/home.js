import React, { useEffect, useState } from "react";
import "../App.css";
import SetPattern from "./setPattern";
import ConfirmPattern from "./confirmPattern";
import EnterPattern from "./enterPattern";

function Home() {
  const [selectedPattern, setSelectedPattern] = useState([]);
  const [pattern, setPattern] = useState([]);
  const [recordPattern, setRecordPattern] = useState(null);
  
  useEffect(() => {
    const tempPattern = localStorage.getItem("recordPattern");
    setRecordPattern(tempPattern );
  } , [recordPattern])
 
  return (
    <div>
      {recordPattern==null ?
        (!selectedPattern.length ? (
          <SetPattern
            setSelectedPattern={setSelectedPattern}
            pattern={pattern}
            setPattern={setPattern}
          />
        ) : (
          <ConfirmPattern
            setSelectedPattern={setSelectedPattern}
            selectedPattern={selectedPattern}
            pattern={pattern}
            setPattern={setPattern}
            setRecordPattern={setRecordPattern}
          />
        )) : <EnterPattern setRecordPattern={setRecordPattern} setSelectedPattern={setSelectedPattern} />}
    </div>
  );
}

export default Home;
