//SPDX-License-Identifier: UNLICENSED
// 指定sol的编译器版本
pragma solidity >=0.4.22 <0.8.0;

// 用contract 关键字定义一个合约
contract Counter {
    // 定义一个变量
    uint256 counter;

    // 定义一个公开可调用的method，发布后可以直接在链上调用
    function count() public {
        counter = counter + 1;
    }

    function getCounter() public view returns (uint256) {
        return counter;
    }
}
