//SPDX-License-Identifier: UNLICENSED
pragma experimental ABIEncoderV2;
pragma solidity >=0.4.22 <=0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

struct Tweet {
    address user;
    string text;
    string date;
}

contract UniqueTweet is ERC721 {
    Tweet[] public tweets;

    event userTweets(address indexed user, string text, string date);

    constructor() ERC721("UniqueTweet", "UNIQUETWEET") {}

    function transferTweet(uint256 _tokenId, address payable buyer)
        public
        payable
    {
        _transfer(ownerOf(_tokenId), buyer, _tokenId);
    }

    function getTweets() public view returns (Tweet[] memory) {
        return tweets;
    }

    function countTweets() public view returns (uint256) {
        return tweets.length;
    }

    function mint(string memory text, string memory date) public {
        tweets.push(Tweet(msg.sender, text, date));
        uint256 _id = tweets.length;
        _mint(msg.sender, _id);
        emit userTweets(msg.sender, text, date);
    }
}
