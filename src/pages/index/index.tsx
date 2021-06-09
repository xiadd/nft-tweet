import { useEffect, useState, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import List from "../../components/List";
import Empty from "../../components/Empty";
import { Context, IContext } from "../../contexts/web3";
import "react-toastify/dist/ReactToastify.css";

function Index() {
  const { contract, account } = useContext<IContext>(Context);
  const [content, setContent] = useState<string>("");
  const [tweets, setTweets] = useState<any[]>([]);

  const fetchTweets = async () => {
    // console.log(
    //   await contract.methods
    //     .transferTweet(1, "0x3e63548098A9c72B73373e0af5fC52325eA666D9")
    //     .send({ from: account })
    // );
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
    if (contract) {
      fetchTweets();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
          <button
            disabled={!content}
            onClick={postTweets}
            className="btn btn-primary btn-lg"
          >
            Post
          </button>
        </div>
        {tweets.length ? <List tweets={tweets} /> : <Empty />}
      </div>
      <ToastContainer />
    </div>
  );
}

export default Index;
