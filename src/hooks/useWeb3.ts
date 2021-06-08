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
      setState({
        account,
        web3,
        contract,
      });
    });
  }, [abi, address]);
  return state;
}
