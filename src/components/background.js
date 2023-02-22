import React from "react";

export default function Background() {
  return (
    <div class="area">
      <ul class="circles">
        {["", "", "", "", "", "", "", ""].map(() => (
          <li></li>
        ))}
      </ul>
    </div>
  );
}
