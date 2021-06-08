import { createContext } from "react";

const context: any = {};

export interface IContext {
  account: string;
  web3: any;
  contract: any;
}

export const Context = createContext<IContext>(context);
