import { useEffect } from "react";
import Web3 from "web3";
import logo from "./logo.svg";
import "./App.css";
import { abi } from "./artifacts/contracts/Counter.sol/Counter.json";

async function loadWeb3() {
  if (window.ethereum) {
    window.web3 = new Web3(window.ethereum);
    await window.ethereum.enable();
  } else if (window.web3) {
    window.web3 = new Web3(window.web3.currentProvider);
  }
}

const address = "0x0165878a594ca255338adfa4d48449f69242eb8f";

function App() {
  useEffect(() => {
    loadWeb3().then(async () => {
      const [account] = await window.web3.eth.getAccounts();
      const contract = new window.web3.eth.Contract(abi, address);
      await contract.methods.count().send({ from: account }, async () => {
        console.log(await contract.methods.getCounter().call(), account);
      });
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
