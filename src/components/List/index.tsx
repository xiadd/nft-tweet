import cx from "classnames";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Link } from "react-router-dom";
import UserAvatar from "../UserAvatar";
import styles from "./index.module.css";

dayjs.extend(relativeTime);

export default function List({ tweets }: { tweets: any[] }) {
  return (
    <div className={cx(styles.wrapper, "mt-2")}>
      {tweets.map((item, index) => (
        <div key={index} className={cx(styles.item, "mt-2")}>
          <div className={styles.header}>
            <Link to={`/user/${item.user}`}>
              <UserAvatar hash={item.user} />
            </Link>
            <span className="text-muted ms-2">
              {dayjs(+item.date).fromNow()}
            </span>
          </div>
          <div className={cx(styles.content, "fw-lighter", "mt-3")}>
            {item.text}
          </div>
        </div>
      ))}
    </div>
  );
}
