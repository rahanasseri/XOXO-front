import { Outlet } from "react-router-dom";

function HeaderLayout() {
  return (
    <div >
      <h1
        style={{
          padding: "10px",
          borderRadius: "10px",
          color: "white",
          textAlign: "center",
          fontSize: "50px",
        }}
      >
        Tic-Tac-Toe
      </h1>
      <div >
        <Outlet />
      </div>
      <p
        style={{
          textAlign: "center",
          color: "rgba(250, 131, 5, 1)",
          fontSize: "30px",
        }}
      >
        Proved by Sarina 
      </p>
    </div>
  );
}
export default HeaderLayout;
