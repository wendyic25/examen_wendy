import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignIn from "./Pages/SignIn/SignIn.jsx";
import Home from "./Pages/Home/Home.jsx";
import Filtrado from "./Pages/Filtrado/Home.jsx";

import "./App.css";

function App() {
  let router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/sign-in", element: <SignIn /> },
    { path: "/filtrar", element: <Filtrado /> },
  ]);

  return (
    <>
      <RouterProvider router={router}>
        <Home />
      </RouterProvider>
    </>
  );
}

export default App;
