import { BrowserRouter, Route, Switch } from "react-router-dom";
import { NavBar } from "./Navbar";
import { Reflex } from "./pages/Reflex";
import { MyAccount } from "./pages/MyAccount";
import { Diary } from "./pages/Diary";


export function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <Reflex />
          </Route>
          <Route path="/myaccount">
            <MyAccount />
          </Route>
          <Route path="/diary">
            <Diary />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

