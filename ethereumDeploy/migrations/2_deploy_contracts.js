var SimpleStorage = artifacts.require("./simplestorage.sol");
var Fibonacci = artifacts.require("./fibonacci.sol");
var ZombieFactory = artifacts.require("./zombiefactory.sol");
var ZombieOwnership = artifacts.require("./zombieownership.sol");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(Fibonacci);
  deployer.deploy(ZombieFactory);
  deployer.deploy(ZombieOwnership);
};