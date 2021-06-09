import { useContext } from "react";
import cx from "classnames";
import TweetItem from "../Tweet";
import { Context, IContext } from "../../contexts/web3";
import styles from "./index.module.css";

export default function List({ tweets }: { tweets: any[] }) {
  const { contract, account } = useContext<IContext>(Context);
  console.log(contract?.methods.ownerOf(1).call());
  return (
    <div className={cx(styles.wrapper, "mt-2")}>
      {tweets.map((item, index) => (
        <TweetItem
          key={index}
          tweet={item}
          id={index + 1}
          account={account}
          ownerOf={() => contract?.methods.ownerOf(index + 1).call()}
        />
      ))}
    </div>
  );
}
