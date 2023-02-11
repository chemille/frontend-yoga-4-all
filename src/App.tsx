import { Route, Routes } from "react-router-dom";
import { NavBar } from "./Navbar";
import { Reflex } from "./pages/Reflex";
import { MyAccount } from "./pages/MyAccount";
import { Diary } from "./pages/Diary";
import Home from "./components/Home";
import UserLogin from "./components/UserLogin";

export function App() {

  return (
    <>
        <NavBar />
        <Routes>
          <Route path="/home" element = {<Home />} />
          <Route path="/" element={<UserLogin />} />
          <Route path="/reflex/:reflexId" element={<Reflex />} />
          <Route path="/myaccount" element={<MyAccount />} />
          <Route path="/diary" element={<Diary />} />
        </Routes>
    </>
  );
}

