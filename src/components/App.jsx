import { useState } from "react";

import { Link } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Link
        to={"/signupForm"}
        style={{
          backgroundColor: "rgba(250, 131, 5, 1)",
          margin: "20px",
          padding: "10px 80px",
          textDecoration: "none",
          borderRadius: "20px",
          color: "white",
        }}
      >
        START
      </Link>
      <Link
        to={"/topScores"}
        style={{
          textDecoration: "none",
          padding: "10px 20px 10px 20px",
          borderRadius: "20px",
          color: "white",
        }}
      >
        SCORES
      </Link>
    </div>
  );
}

export default App;
