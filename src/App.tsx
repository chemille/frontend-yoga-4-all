import { BrowserRouter, Route, Switch } from "react-router-dom";
import { NavBar } from "./Navbar";
import { Reflex } from "./pages/Reflex";
import { MyAccount } from "./pages/MyAccount";
import { Diary } from "./pages/Diary";
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
          {/* <Route path="/Reflex" exact>
            <Reflex />

          </Route> */}
          <Route path="/Reflex/:reflexId" component={Reflex} />
            {/* <Reflex />
          </Route> */}
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

