import { useState, useEffect } from "react";
import Web3 from "web3";

async function loadWeb3() {
  let web3: any = null;
  if ((window as any).ethereum) {
    web3 = new Web3((window as any).ethereum);
    await (window as any).ethereum.enable();
  }
  return web3;
}

export default function useWeb3(abi: any, address: any) {
  const [state, setState] = useState<any>({
    account: null,
    web3: null,
    contract: null,
  });
  useEffect(() => {
    loadWeb3().then(async (web3) => {
      const [account] = await web3.eth.getAccounts();
      const contract = new web3.eth.Contract(abi, address);
      console.log(
        await contract.getPastEvents("userTweets", {
          filter: {
            user: ["0x2a4c8Cf616aBADD9F3ce7C2C69F1f9c575750fd9"],
          },
          fromBlock: 0,
          toBlock: "latest",
        })
      );
      setState({
        account,
        web3,
        contract,
      });
    });
  }, [abi, address]);
  useEffect(() => {
    window.ethereum.on("accountsChanged", (accounts: string[]) => {
      setState(($state: any) => ({
        ...$state,
        account: accounts[0],
      }));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return state;
}
