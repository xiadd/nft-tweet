import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import cx from "classnames";
import UserAvatar from "../UserAvatar";
import { Context, IContext } from "../../contexts/web3";

export default function Header() {
  const { account } = useContext<IContext>(Context);
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Tweets
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setVisible(!visible)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={cx("collapse navbar-collapse", {
            show: visible,
          })}
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search tweets"
              aria-label="Search"
            />
            <Link to={`/user/${account}`}>
              <UserAvatar hash={account || ""} size={36} />
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
}
