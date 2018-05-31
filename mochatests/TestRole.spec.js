const assert = require('chai').assert;
require('dotenv').config();
let Web3;
let pwd = process.env.DEFAULT_ACCOUNT_PWD;
let defaultTxObject = {
    from: process.env.DEFAULT_ACCOUNT,
    gasPrice: 0,
    gas: 9040000
}

Web3 = require('web3');
let web3Provider = new Web3.providers.HttpProvider(process.env.JSONRPC_URL);
let web3 = new Web3(web3Provider);
let Role = require('../build/contracts/Role.json');
let instance = new web3.eth.Contract(Role.abi, Role.networks['1'].address);


describe('Role verify', () => {
  
  it("should return true for role 5 function name setInfo", async () => {
    let result = await instance.methods.verify(5,"setInfo").call(defaultTxObject);
    assert.equal(result, true);
  });
});