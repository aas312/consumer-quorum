pragma solidity ^0.4.21;

import "./Role.sol";
import "./User.sol";

contract BaseContract {
    
    Role roles;
    User users;

    function BaseContract(address _r, address _u)
        public
    {
        roles = Role(_r);
        users = User(_u);
    }
    
    modifier isAllowed(bytes32 _senderId, string funcName)
    {
        // uint8 role = users.returnUserRole(_senderId);
        // bool isVerified = roles.verify(role, funcName);        
        require(roles.verify( users.returnUserRole(_senderId), funcName));
        _;
    }
}