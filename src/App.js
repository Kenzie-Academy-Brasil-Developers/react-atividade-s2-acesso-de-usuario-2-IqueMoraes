import "./App.css";
import { Switch, Route } from "react-router-dom";
import { inicialMembers } from "./components/members";
import Home from "./pages/Home";
import Customer from "./pages/Customer";
import Company from "./pages/Company";
import { useState } from "react";

function App() {
  const [members, setMembers] = useState(inicialMembers);

  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/">
            <Home members={members} setMembers={setMembers} />
          </Route>
          <Route exact path="/customer/:id">
            <Customer members={members} />
          </Route>
          <Route exact path="/company/:id">
            <Company members={members} />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
