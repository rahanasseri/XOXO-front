import { useEffect, useState } from "react";

function PlayButton({
  turn,
  setSelecter,
  setTurn,
  isdone,
}) {
  let [clicked, setClicked] = useState(isdone);
  let [bcolor, setBcolor] = useState("");
  let [text, setText] = useState("");

  useEffect(
    (event) => {
      setClicked(isdone);
    },
    [isdone]
  );


  return (
    <div
      style={{
        width: "200px",
        height: "200px",
        backgroundColor: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: bcolor,
        fontSize: "80px",
        marginBottom:"20px",
        marginLeft:"20px",
        borderRadius: "10px"
      }}
      onClick={
        clicked
          ? null
          : () => {
              setBcolor(turn % 2 == 1 ? "blue" : "red");
              setText(turn % 2 == 1 ? "X" : "O");
              setSelecter(turn % 2 == 1 ? 1 : 2);
              setClicked(true);
              setTurn();
              
            }
      }
    >
      {text ? <p>{text}</p> : null}
    </div>
  );
}
export default PlayButton;
