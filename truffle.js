module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 22000, // was 8545
      network_id: "*", // Match any network id
      gasPrice: 0,
      gas: 9040000,
      from: "0xed9d02e382b34818e88b88a309c7fe71e65f419d"
    },
    ganache: {
      host: "127.0.0.1",
      port: 7545, 
      network_id: "5777"
    }
  }
};
