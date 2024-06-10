import useTopTenUsers from "./useTopTenUsers";

function TopPlayers() {
  let { data } = useTopTenUsers();


  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        color: "white",
      }}
    >
      <h1>Top 10</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          flexDirection: "column",
        }}
      >
        <div
            style={{
              display: "flex",
              width: "70%",
              justifyContent: "space-between",
              fontSize: "30px"
            }}
        ><p>SCORE</p>
            <p>NAME</p>
            <p>ROW</p>
        </div>
        {data?.map((item, index) => (
          <div
            style={{
              display: "flex",
              width: "70%",
              justifyContent: "space-between",
            }}
            key={index}
          >
            
            <p>{item.score}</p>
            <p>{item.name}</p>
            <p>{index+1}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default TopPlayers;
