import React from "react";

function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  return hours + ":" + minutes;
}

export default function Info({title}) {
  const date = new Date();

  return (
    <div className="context">
      <h1>{formatAMPM(date)}</h1>
      <p>{date.toLocaleString().split(",")[0]}</p>
      <h6 className="heading">{title}</h6>
    </div>
  );
}
