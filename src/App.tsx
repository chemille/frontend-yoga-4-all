import { BrowserRouter, Route, Switch } from "react-router-dom";
import { NavBar } from "./Navbar";
import { Reflex } from "./pages/Reflex";
import { MyAccount } from "./pages/MyAccount";
import { DiaryEntries } from "./pages/DiaryEntries";
import Home from "./components/Home";

export function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
{/* this needs to be changed too the exact route of the page which matches the title to the reflex */}
          <Route path="/Reflex" exact>
            <Reflex />
          </Route>
          <Route path="/myaccount">
            <MyAccount />
          </Route>
          <Route path="/diary">
            <DiaryEntries />
          </Route> 
        </Switch>
      </BrowserRouter>
    </>
  );
}

