import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import useWeb3 from "./hooks/useWeb3";
import { abi } from "./artifacts/contracts/Tweet.sol/UniqueTweet.json";
import List from "./components/List";
import Empty from "./components/Empty";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const address = "0xac547E50620c8Cb9AE7E0575Ae378f7744DEF347";

function App() {
  const { contract, account } = useWeb3(abi, address);
  const [content, setContent] = useState("");
  const [tweets, setTweets] = useState([]);

  const fetchTweets = async () => {
    const tweets = await contract.methods.getTweets().call();
    setTweets(tweets);
  };
  const postTweets = () => {
    if (!content) return toast.info("Content cannot be empty");
    contract.methods
      .mint(content, Date.now().toString())
      .send({ from: account })
      .on("transactionHash", function (hash: any) {
        console.log({ hash });
        window.location.reload();
      })
      .on("confirmation", function (confirmationNumber: any, receipt: any) {
        console.log({ confirmationNumber, receipt });
      });
  };
  useEffect(() => {
    if (contract) fetchTweets();
  }, [contract]);
  return (
    <div className="App">
      <div className="container mt-2 grid-lg">
        <textarea
          className="form-control"
          rows={3}
          placeholder="Input you tweet"
          style={{ resize: "none" }}
          value={content}
          onChange={(evt) => setContent(evt.target.value)}
        />
        <div className="mt-2">
          <button onClick={postTweets} className="btn btn-primary btn-lg">
            Post
          </button>
        </div>
        {tweets.length ? <List tweets={tweets} /> : <Empty />}
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
