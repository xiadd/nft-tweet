import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

const config = {
  supportedNetworks: [1, 4],
};

// @ts-ignore
export const injectedConnector = new InjectedConnector({
  supportedChainIds: config.supportedNetworks,
});

export const walletconnectConnector = new WalletConnectConnector({
  rpc: {
    1: "https://mainnet.infura.io/v3/00a5b13ef0cf467698571093487743e6",
    4: "https://rinkeby.infura.io/v3/00a5b13ef0cf467698571093487743e6",
  },
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
  pollingInterval: 12000,
});

export default config;
