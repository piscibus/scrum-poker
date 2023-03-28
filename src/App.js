import React from "react";
import {
  createHashRouter,
  RouterProvider,
  useLocation,
  useNavigate,
} from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Card from "./components/Cards/Card";
function App() {
  const  router = createHashRouter([
    { index: true, element: <Home /> },
    { path: "/home", element: <Card /> },
    { path: "/carditem/:id", element: <FullPageElement /> },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

const FullPageElement = (props) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: "90%",
        height: "50%",
        display: "flex",
        padding: "20px",
        margin: "auto",
        cursor: "pointer",
        marginTop: "15rem",
        position: "relative",
        border: "1px solid",
        borderRadius: "10%",
      }}
      onClick={() => navigate("/")}
    >
      <span
        style={{
          position: "absolute",
          top: "1%",
          right: "10%",
          fontSize: "25px",
        }}
      >
        {location.state.id}{" "}
      </span>
      <img
        alt={location.state.id}
        src={location.state.image}
        style={{ width: "100%", height: "50%", margin: "auto" }}
      />
    </div>
  );
};

export default App;
