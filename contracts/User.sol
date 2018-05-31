pragma solidity ^0.4.21;
contract User {    
    address creator;    
    
    mapping(bytes32 => uint8) private users;
   
    event LogRecodUser(bytes32 uid, uint8 role);

    function  User() 
        public
    {
        creator = msg.sender;
    }
    
    function recordUser(bytes32  uid, uint8 role)
        public
        returns (bool)
    {
        users[uid] = role;
        emit LogRecodUser(uid, role);
        return true;
    }

    function returnUserRole(bytes32 uid) 
        public 
        constant 
        returns (uint8 role) 
    {
        return users[uid];
    }
 }