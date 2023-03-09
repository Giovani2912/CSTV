import "./styles/main.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="mx-auto flex flex-col items-center">
      <Outlet />
    </div>
  );
}

export default App;
