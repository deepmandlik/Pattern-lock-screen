import React, { useState } from "react";
import PatternLock from "react-pattern-lock";

// in you render method

export default function Pattern({setPattern}) {
  const [path, setPath] = useState([]);
  
  const getPath = (path) => {
    setPath(path);
    setPattern(path)
  }

  return (
    <div class="pattern">
      <PatternLock
        width={300}
        pointSize={15}
        size={3}
        path={path}
        onChange={(path) => {
          getPath(path);
        }}
        error={false}
        onFinish={() => {
          // check if the pattern is correct
        }}
      />
      ;
    </div>
  );
}
