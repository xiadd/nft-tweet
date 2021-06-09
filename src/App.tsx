import { Switch, Route, useLocation } from "react-router-dom";
import Home from "./pages/home";
import Index from "./pages/index";
import UserProfile from "./pages/user";
import Transfer from "./pages/transfer";
import Header from "./components/Header";
import useWeb3 from "./hooks/useWeb3";
import { abi } from "./artifacts/contracts/Tweet.sol/UniqueTweet.json";
import { Context } from "./contexts/web3";
import "./App.css";

const address = process.env.REACT_APP_CONTRACT_ADDRESS;

function App() {
  const { contract, account, web3 } = useWeb3(abi, address);
  const location = useLocation();
  return (
    <Context.Provider value={{ contract, account, web3 }}>
      <>
        {location.pathname !== "/" && <Header />}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/tweets">
            <Index />
          </Route>
          <Route path="/user/:id">
            <UserProfile />
          </Route>
          <Route path="/transfer/:id">
            <Transfer />
          </Route>
        </Switch>
      </>
    </Context.Provider>
  );
}

export default App;
