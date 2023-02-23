import React, { useEffect, useState } from "react";
import PatternLock from "react-pattern-lock";
import Message from "./message";

export default function Pattern({ setPattern, pattern, error = false }) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [color, setcolor] = useState("");

  const getPath = (path) => {
    setPattern(path);
  };

  const recordPattern = localStorage.getItem("recordPattern");

  const verifyPattern = () => {
    setOpen(true);
    if (recordPattern == JSON.stringify(pattern)) {
      setMessage("Unlocked");
      setcolor("success");
    } else {
      setMessage("Try again");
      setcolor("error");
    }
    setTimeout(() => {setPattern([])} , 1500);
  };

  useEffect(() => {
    setPattern([]);
  }, []);

  return (
    <div>
      <div className="pattern">
        <PatternLock
          width={300}
          pointSize={15}
          size={3}
          path={pattern}
          onChange={(path) => {
            getPath(path);
          }}
          error={error}
          onFinish={() => {
            recordPattern && recordPattern.length && verifyPattern()
          }}
        />
      </div>
      <Message open={open} setOpen={setOpen} message={message} color={color} />
    </div>
  );
}
