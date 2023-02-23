import React from "react";

export default function Background() {
  return (
    <div className="area">
      <ul className="circles">
        {["", "", "", "", "", "", "", ""].map((value , index) => (
          <li key={index}></li>
        ))}
      </ul>
    </div>
  );
}
