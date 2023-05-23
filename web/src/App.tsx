import "./styles/main.css";
import { Outlet, Route, redirect } from "react-router-dom";
import { AuthProvider } from './context/AuthProvider';
import RequireAuth from "./Screens/RequireAuth";

function App() {
  return (
    <div className="mx-auto flex flex-col items-center">
      <AuthProvider>
        {/* <Route element={<RequireAuth />}></Route> */}
       <Outlet />
      </AuthProvider>
    </div>
  );
}

export default App;
