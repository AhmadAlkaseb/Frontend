import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import AppLayout from "../layout/AppLayout.jsx";
import {Home} from "../pages/Home.jsx";
import {Hotels} from "../pages/hotel/Hotels.jsx";
import {Login} from "../pages/authentication/Login.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout/>}>

              <Route index element={<Navigate to="home"/>}/>
              <Route path="/home" element={<Home />} />
              <Route path="/hotels" element={<Hotels />} />
              <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
