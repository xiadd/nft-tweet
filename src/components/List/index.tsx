import cx from "classnames";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import styles from "./index.module.css";

dayjs.extend(relativeTime);

export default function List({ tweets }: { tweets: any[] }) {
  return (
    <div className={cx(styles.wrapper, "mt-2")}>
      {tweets.map((item, index) => (
        <div key={index} className={cx(styles.item, "mt-2")}>
          <div className={styles.header}>
            <b>{item.user}</b>
            <span className="text-tiny ml-2">
              {dayjs(+item.date).fromNow()}
            </span>
          </div>
          <div className={styles.content}>{item.text}</div>
        </div>
      ))}
    </div>
  );
}
