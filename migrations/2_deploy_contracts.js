var erc = artifacts.require("./ERC721.sol");
var clock = artifacts.require("./ClockAuction.sol");

module.exports = function(deployer) {
  deployer.deploy(clock, '0x06012c8cf97bead5deae237070f9587f8e7a266d', 10);
  // deployer.link(ConvertLib, MetaCoin);
  // deployer.deploy(MetaCoin);
};
