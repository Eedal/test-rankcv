import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import { Home } from "./pages/Home";
import Location from "./pages/Location";
import Episodes from "./pages/Episodes";
import Character from "./pages/Character";
import ProtectedRoute from "./components/ProtectedRoute";
import { useAppSelector } from "./hooks";
import { selectIsLoggedIn } from "./features/auth/authSlice";

function App() {
  const isAuthenticated = useAppSelector(selectIsLoggedIn);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route index element={<Home />} />
        <Route element={<ProtectedRoute isAllowed={isAuthenticated} />}>
          <Route path="/home" element={<Home />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="/location" element={<Location />} />
          <Route path="/home/:characterId" element={<Character />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
