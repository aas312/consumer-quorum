require('dotenv').config();
let _ = require('lodash');
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
let userManager = require('./build/contracts/User.json');
let userManagerInstance = new web3.eth.Contract(userManager.abi, userManager.networks['1'].address);
let roleManager = require('./build/contracts/Role.json');
let roleManagerInstance = new web3.eth.Contract(roleManager.abi, roleManager.networks['1'].address);
let consumer = require('./build/contracts/Consumer.json');
let consumerInstance = new web3.eth.Contract(consumer.abi, consumer.networks['1'].address);


let user = {
    "username": `user${_.random(0,100)}`,
    "role": 5,
    "address": "0xed9d02e382b34818e88B88a309c7fe71E65f419d"
}

const uid = web3.utils.utf8ToHex(user.username);
console.log(uid)
async function recordUser() {
    try {
        return await userManagerInstance.methods.recordUser(
            uid,            
            user.role
        ).send(defaultTxObject);
    } catch (error) {
        console.log(error)
    }
}

async function returnUserRole() {
    try {       
        return await userManagerInstance.methods.returnUserRole(uid).call(defaultTxObject);   
        
    } catch (error) {
        console.log(JSON.stringify(error))
    }
}


async function getInfo() {
    try {
        return await consumerInstance.methods.getInfo()
        .call(defaultTxObject);
    } catch (error) {
        console.log(JSON.stringify(error))
    }
    
}

async function setInfo() {
    try {
        return await consumerInstance.methods.setInfo(32,uid)
        .send(defaultTxObject);
    } catch (error) {
        console.log(JSON.stringify(error))
    }
    
}



(async () => {
    try {
        let txR1 = await recordUser();
        console.log(txR1)
        let userRole = await returnUserRole();
        console.log(userRole)
        let txR = await setInfo();
        console.log(txR);
        let value = await getInfo();
        console.log(value);
    } catch (error) {
        console.log(error)
    }
    
})();
