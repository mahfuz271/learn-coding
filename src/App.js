import Router from "./Router/Router";
import { RouterProvider } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div>
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
