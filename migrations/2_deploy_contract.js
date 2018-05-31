let Role = artifacts.require("./Role.sol");
let User = artifacts.require("./User.sol");
let Consumer = artifacts.require("./Consumer.sol");

module.exports = function(deployer) {
  deployer.deploy(Role,5,{overwrite: false}) 
  .then(() => {
    return deployer.deploy(User, {overwrite: false});
  })
  .then(() => {
    return deployer.deploy(Consumer, Role.address, User.address);
  })
  .then(() => {
    return Role.deployed();
  })
  .then((instance) => {
    return instance.initRoles()
  })
  .then((txR)=>{
    console.log(JSON.stringify(txR))
  })
  .catch((error)=>{
    console.log(error);
  })
};
