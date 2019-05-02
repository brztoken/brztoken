var BRZToken = artifacts.require("./BRZToken.sol");

const name = "BRZ";
const symbol = "BRZ";
const decimals = 4;

module.exports = function (deployer) {
    deployer.deploy(BRZToken, name, symbol, decimals, {gas: 6700000});
};
