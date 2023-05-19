import "./styles/main.css";
import { Outlet } from "react-router-dom";
import { AuthProvider } from './context/AuthProvider';
function App() {
  return (
    <div className="mx-auto flex flex-col items-center">
      <AuthProvider>
       <Outlet />
      </AuthProvider>
    </div>
  );
}

export default App;
