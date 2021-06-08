import { Switch, Route } from "react-router-dom";
import Index from "./pages/index";
import UserProfile from "./pages/user";
import Header from "./components/Header";
import useWeb3 from "./hooks/useWeb3";
import { abi } from "./artifacts/contracts/Tweet.sol/UniqueTweet.json";
import { Context } from "./contexts/web3";
import "./App.css";

const address = process.env.REACT_APP_CONTRACT_ADDRESS;

function App() {
  const { contract, account, web3 } = useWeb3(abi, address);
  return (
    <Context.Provider value={{ contract, account, web3 }}>
      <>
        <Header />
        <Switch>
          <Route exact path="/">
            <Index />
          </Route>
          <Route path="/user/:id">
            <UserProfile />
          </Route>
        </Switch>
      </>
    </Context.Provider>
  );
}

export default App;
