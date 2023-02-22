import React from "react";
import "../App.css";
import Background from "../components/background";
import Info from "../components/info";
import Pattern from "../components/pattern";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

function ConfirmPattern({setPattern}) {
   
  const checkPattern = () => {
    
  }

  return (
    <div>
      <Info title="Confirm Pattern"/>
      <Pattern setPattern={setPattern} />
      <Box className="btn">
        <Button className="btn1" variant="contained" color="primary" size="small">Verify</Button>
      </Box>
      <Background />
    </div>
  );
}

export default ConfirmPattern;
