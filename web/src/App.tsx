import "./styles/main.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <Outlet />
    </div>
  );
}

export default App;
