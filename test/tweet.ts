import { expect } from "chai";
import hre from "hardhat";

require("chai").use(require("chai-as-promised")).should();

describe("UniqueTweet", function () {
  it("Count tweets", async function () {
    const Tweet = await hre.ethers.getContractFactory("UniqueTweet");
    const tweet = await Tweet.deploy();

    await tweet.deployed();
    let value = await tweet.countTweets();
    expect(value.toString().should.equal("0"));
  });
});
