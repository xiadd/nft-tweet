/**
 * @type import('hardhat/config').HardhatUserConfig
 */

import "@nomiclabs/hardhat-waffle";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  solidity: "0.7.3",
  paths: {
    artifacts: "./src/artifacts",
  },
};
