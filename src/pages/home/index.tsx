import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      style={{ height: "100vh" }}
      className="d-flex text-center text-white bg-dark"
    >
      <div
        className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column"
        style={{
          maxWidth: "42em",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <main className="px-3">
          <h1>NFT Tweets</h1>
          <p className="lead">
            A non-fungible token (NFT) is a unit of data stored on a digital
            ledger, called a blockchain, that certifies a digital asset to be
            unique and therefore not interchangeable.[1] NFTs can be used to
            represent items such as photos, videos, audio, and other types of
            digital files.
          </p>
          <p className="lead">
            <Link
              to="/tweets"
              className="btn btn-lg btn-secondary fw-bold border-white bg-white text-dark"
            >
              View tweets
            </Link>
            <a
              href="https://github.com/xiadd/nft-tweet"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-lg btn-secondary fw-bold border-white bg-white text-dark ms-2"
            >
              Github
            </a>
          </p>
        </main>
      </div>
    </div>
  );
}
