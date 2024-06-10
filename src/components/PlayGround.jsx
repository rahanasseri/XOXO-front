import { useEffect, useState } from "react";
import PlayButton from "./PlayButton";
import { Navigate, useLocation, useParams } from "react-router-dom";
import APIClient from "./apiconnection";
function postResults(winner, loser) {
  const apiClient = new APIClient("ttt/changeScore");
  apiClient.post([
    { name: winner, status: "Win" },
    { name: loser, status: "Lose" },
  ]);
}

function PlayGround() {
  let [turn, setTurn] = useState(1);
  let [selected, setSelected] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  let [winner, setWinner] = useState(null);
  let [isdone, setIsdone] = useState(false);
  let {state} = useLocation();
  let player1name = state.name1;
  let player2name = state.name2;

  useEffect(() => {
    console.log(selected);
    for (let i = 0; i < 9; i += 3) {
      if (
        selected[i] == selected[i + 1] &&
        selected[i + 1] == selected[i + 2] &&
        selected[i] != 0
      ) {
        selected[i] == 1 ? setWinner(player1name) : setWinner(player2name);
        selected[i] == 1
          ? postResults(player1name, player2name)
          : postResults(player2name, player1name);
        setIsdone(true);
        return;
      }
    }
    for (let i = 0; i < 3; i++) {
      if (
        selected[i] == selected[i + 3] &&
        selected[i + 3] == selected[i + 6] &&
        selected[i] != 0
      ) {
        selected[i] == 1 ? setWinner(player1name) : setWinner(player2name);
        selected[i] == 1
          ? postResults(player1name, player2name)
          : postResults(player2name, player1name);
        setIsdone(true);
        return;
      }
    }
    if (
      selected[0] == selected[4] &&
      selected[4] == selected[8] &&
      selected[0] != 0
    ) {
      selected[0] == 1 ? setWinner(player1name) : setWinner(player2name);
      selected[0] == 1
        ? postResults(player1name, player2name)
        : postResults(player2name, player1name);
      setIsdone(true);
      return;
    }
    if (
      selected[2] == selected[4] &&
      selected[4] == selected[6] &&
      selected[2] != 0
    ) {
      selected[2] == 1 ? setWinner(player1name) : setWinner(player2name);
      selected[2] == 1
        ? postResults(player1name, player2name)
        : postResults(player2name, player1name);
      setIsdone(true);
      return;
    }
  }, [turn]);
  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          color: "white",
          width: "80%",
          fontSize: "30px"
        }}
      >
        <p>{ "red is : " + player2name}</p>
        <p>{"blue is : " + player1name}</p>
      </div>
      <div style={{display: "flex",width:"100%",justifyContent:"space-around"}}>
      <div
        
      >
        <div style={{display: "flex"}}>
        {selected.map((item, i) => (
          i < 3  ?
          <PlayButton
            turn={turn}
            isdone={isdone}
            setTurn={() => setTurn(turn + 1)}
            setSelecter={(selector) =>
              setSelected(
                selected.map((item2, j) => (j === i ? selector : item2))
              )
            }
          />: null
        ))}
        </div>
        <div style={{display: "flex"}}>
        {selected.map((item, i) => (
          i > 2 && i < 6  ?
          <PlayButton
            turn={turn}
            isdone={isdone}
            setTurn={() => setTurn(turn + 1)}
            setSelecter={(selector) =>
              setSelected(
                selected.map((item2, j) => (j === i ? selector : item2))
              )
            }
          />: null
        ))}
        </div>
        <div style={{display: "flex"}}>
        {selected.map((item, i) => (
          i > 5 && i < 9  ?
          <PlayButton
            turn={turn}
            isdone={isdone}
            setTurn={() => setTurn(turn + 1)}
            setSelecter={(selector) =>
              setSelected(
                selected.map((item2, j) => (j === i ? selector : item2))
              )
            }
          />: null
        ))}
        </div>
        
      </div>
      <div
        style={{
          display: "flex",

          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {winner ? <p
            style={{
              color: "white",
              backgroundColor: "gray",
              padding: "10px 100px",
              borderRadius: "10px",
            }}
          >{`${winner}  Won`}</p> : (
          <p
            style={{
              color: "white",
              backgroundColor: "gray",
              padding: "10px 100px",
              borderRadius: "10px",
            }}
          >
            
              {turn % 2 == 1 ? player1name : player2name}
            
            's turn
          </p>
        )}
      </div>
      </div>
    </div>
    
  );
}
export default PlayGround;
