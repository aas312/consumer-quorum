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
let contract = require('../build/contracts/Consumer.json');
let instance = new web3.eth.Contract(contract.abi, contract.networks['1'].address);


describe('Consumer getInfo', () => {
  
  it("should return 42", async () => {
    let result = await instance.methods.getInfo().call(defaultTxObject);
    assert.equal(result, 42);
  });
});