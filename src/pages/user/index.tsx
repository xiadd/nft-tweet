import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Context, IContext } from "../../contexts/web3";
import List from "../../components/List";

export default function UserProfile() {
  const { id } = useParams<any>();
  const [tweets, setTweets] = useState<any>([]);
  const { contract } = useContext<IContext>(Context);
  const fetchTweets = async () => {
    const tweets = await contract.methods.getTweets().call();
    setTweets(tweets);
  };
  useEffect(() => {
    if (contract) fetchTweets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contract]);
  return (
    <div className="container mt-2">
      <List tweets={tweets.filter((o: any) => o.user === id)} />
    </div>
  );
}
