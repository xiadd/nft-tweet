import styles from "./index.module.css";
import cx from "classnames";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Link } from "react-router-dom";
import UserAvatar from "../UserAvatar";
import { useEffect, useState } from "react";

dayjs.extend(relativeTime);

export interface IProps {
  tweet: any;
  ownerOf: () => Promise<any>;
  id: number;
  account: string;
}

export default function TweetItem({ tweet, ownerOf, id, account }: IProps) {
  const [owner, setOnwer] = useState<any>(null);
  useEffect(() => {
    ownerOf().then((owner: string) => {
      setOnwer(owner);
    });
  }, [id, ownerOf, tweet]);
  return (
    <div className={cx(styles.item, "mt-2")}>
      <div className={styles.header}>
        <Link to={`/user/${tweet.user}`}>
          <UserAvatar hash={tweet.user} />
        </Link>
        <span className="text-muted ms-2">{dayjs(+tweet.date).fromNow()}</span>
      </div>
      <div className={cx(styles.content, "fw-lighter", "mt-3")}>
        {tweet.text}
      </div>
      <div className={cx(styles.footer)}>
        <div className="text-muted fs-sm">Owner: {owner}</div>
        {account === owner && (
          <Link to={`/transfer/${id}`}>
            <button className="btn btn-primary btn-sm">Transfer</button>
          </Link>
        )}
      </div>
    </div>
  );
}
