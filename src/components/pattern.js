import React, { useEffect, useState } from "react";
import PatternLock from "react-pattern-lock";
import Message from "./message";

export default function Pattern({
  setPattern,
  pattern,
  error = false,
  reset = false,
  resetPattern,
  disabled = false,
  setDisabled,
}) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [color, setcolor] = useState("");
  const [value, setValue] = useState(0);

  const getPath = (path) => {
    setPattern(path);
  };

  const recordPattern = localStorage.getItem("recordPattern");

  const verifyPattern = () => {
    setOpen(true);
    if (recordPattern === JSON.stringify(pattern)) {
      if (reset) {
        setMessage("Permission to reset pattern");
        setcolor("success");
        setTimeout(() => {
          resetPattern();
        }, 2000);

        return;
      }
      setMessage("Unlocked");
      setcolor("success");
      setValue(0);
    } else {
      if (value > 3) {
        setValue(0);
        setMessage("Disable for 30 seconds");
        setcolor("error");
        setDisabled(true);
        setTimeout(() => {
          setDisabled(false);
        }, 30000);
      } else {
        setMessage("Try again");
        setcolor("error");
        setValue(value + 1);
      }
    }
    setTimeout(() => {
      setPattern([]);
    }, 2000);
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
          disabled={disabled}
          onChange={(path) => {
            getPath(path);
          }}
          error={error}
          onFinish={() => {
            recordPattern && recordPattern.length && verifyPattern();
          }}
        />
      </div>
      <Message open={open} setOpen={setOpen} message={message} color={color} />
    </div>
  );
}
