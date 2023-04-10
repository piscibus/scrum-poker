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
  const router = createHashRouter([
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
    <div className="full-page-element" onClick={() => navigate("/")}>
      <span className="full-page-sapn">{location.state.id} </span>
      <img
        alt={location.state.id}
        src={location.state.image}
        className="full-page-img"
      />
    </div>
  );
};

export default App;
