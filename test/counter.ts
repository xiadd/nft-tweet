import { expect } from "chai";
import hre from "hardhat";

require("chai").use(require("chai-as-promised")).should();

describe("Counter", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Counter = await hre.ethers.getContractFactory("Counter");
    const counter = await Counter.deploy();

    await counter.deployed();
    let value = await counter.getCounter();
    expect(value.toString().should.equal("0"));
    await counter.count();
    value = await counter.getCounter();
    expect(value.toString().should.equal("1"));
  });
});
