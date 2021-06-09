import { useState, useContext } from "react";
import { Context, IContext } from "../../contexts/web3";

export default function Transfer() {
  const [address, setAdress] = useState("");
  const { contract, account } = useContext<IContext>(Context);
  const handleConfirmTransfer = () => {
    contract.methods
      .transferTweet(1, address)
      .send({ from: account })
      .on("receipt", () => {
        window.location.href = "/";
      });
  };
  return (
    <div className="container mt-2 shadow-sm bg-white rounded p-4">
      <input
        value={address}
        onChange={(evt) => setAdress(evt.target.value)}
        className="form-control"
        placeholder="Input address"
      />
      <button
        className="btn btn-primary btn-block mt-2"
        style={{ width: "100%" }}
        disabled={!address}
        onClick={handleConfirmTransfer}
      >
        Confirm
      </button>
    </div>
  );
}
