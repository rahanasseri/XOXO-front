import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function SignupForm() {
  let [error, setError] = useState(null);
  const player1nameRef = useRef("");
  const player2nameRef = useRef("");
  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();
    if (
      player1nameRef.current.value != "" && player2nameRef.current.value != ""
    ) {
      navigate(`/playGround`,{state:{name1: player1nameRef.current.value ,name2: player2nameRef.current.value}});
    } else {
      setError("player names shouldn't be empty");
    }
  }
  return (
    <form
      action="post"
      onSubmit={(event) => handleSubmit(event)}
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        color: "white",
      }}
    >
      <h2>fill the form</h2>
      {error ? <p style={{ color: "rgb(230, 18, 18)" }}>{error}</p> : null}
      <input
        type="text"
        ref={player1nameRef}
        placeholder="player 1"
        style={{
          margin: "20px",
          padding: "4px 25px",
          borderRadius: "10px",
          outline: "none",
          backgroundColor: "transparent",
          borderColor: "black",
          borderStyle: "solid",
          color: "white",
        }}
      />
      <input
        type="text"
        ref={player2nameRef}
        placeholder="player 2"
        style={{
          margin: "20px",
          padding: "4px 25px",
          borderRadius: "10px",
          outline: "none",
          backgroundColor: "transparent",
          borderColor: "black",
          borderStyle: "solid",
          color: "white",
        }}
      />
      <button
        type="submit"
        style={{
          backgroundColor: "rgba(250, 131, 5, 1)",
          border: "none",
          borderRadius: "15px",
          padding: "10px 45px",
          cursor: "pointer",
          color: "white",
          marginTop: "50px"
        }}
      >
        start the game
      </button>
    </form>
  );
}
export default SignupForm;
