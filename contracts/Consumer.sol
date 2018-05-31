pragma solidity ^0.4.21;

import "./BaseContract.sol";

contract Consumer is BaseContract {
    address owner;
    
    uint8 info;

    event LogSetInfo(uint8 info);

    function Consumer(address _r,address _u)
        public
        BaseContract(_r, _u)
    {
        owner = msg.sender;
        info = 42;
    }

    function setInfo(uint8 newInfo, bytes32 _senderId)
        public
        isAllowed(_senderId, "setInfo")
        returns (uint8 value) 
    {
        info = newInfo;
        emit LogSetInfo(info);
        return info;
    }

    function getInfo()
        public
        view
        returns (uint8 value) 
    {
        return info;
    }
}