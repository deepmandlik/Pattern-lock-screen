import React, { useState } from "react";
import "../App.css";
import Background from "../components/background";
import Info from "../components/info";
import Pattern from "../components/pattern";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Message from "../components/message";
import { useNavigate } from "react-router-dom";

function ConfirmPattern({
  setPattern,
  pattern,
  selectedPattern,
  setSelectedPattern,
  setRecordPattern,
}) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [color, setcolor] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const checkPattern = () => {
    setOpen(true);
    if (JSON.stringify(selectedPattern) == JSON.stringify(pattern)) {
      setMessage("Pattern successfully set");
      setcolor("success");
      localStorage.setItem("recordPattern", JSON.stringify(selectedPattern));
      setTimeout(() => {
        setRecordPattern(selectedPattern);
      }, 2000);
    } else {
      setMessage("Pattern is incorrect");
      setcolor("error");
      setError(true);
      setTimeout(() => {
        setError(false);
        setPattern([]);
        setSelectedPattern([]);
      }, 2000);
    }
  };

  return (
    <div>
      <Info title="Confirm Pattern" />
      <Pattern setPattern={setPattern} pattern={pattern} error={error} />
      <Box className="btn">
        <Button
          className="btn1"
          variant="contained"
          color="primary"
          size="small"
          disabled={!pattern.length}
          onClick={checkPattern}
        >
          Verify
        </Button>
      </Box>
      <Background />
      <Message open={open} setOpen={setOpen} message={message} color={color} />
    </div>
  );
}

export default ConfirmPattern;
