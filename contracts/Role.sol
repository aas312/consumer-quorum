pragma solidity ^0.4.21;
contract Role {    
    address creator;
    
    mapping(uint8 => string) private roles;
    uint8 maxRoles;
    function  Role(uint8 _maxRoles) 
        public
    {
        maxRoles = _maxRoles;
        creator = msg.sender;
    }
    event LogRecordRole(uint8  rid, string fun);
    function recordRole(uint8  rid, string fun)
        public
        returns (bool)
    {
        roles[rid] = fun;
        emit LogRecordRole(rid, fun);
        return true;
    }
    function getFunc(uint8 rid)
        public
        view
        returns (string fun)
    {
        return roles[rid];
    }
    
    function verify(uint8 rid, string fun) 
        public 
        view 
        returns (bool isAllowed) 
    {
        return stringsEqual(roles[rid], fun);
    }

    function stringsEqual(string memory _string1, string memory _string2)  
        private 
        pure 
        returns (bool isEqual) 
    {
        return (keccak256(_string1) == keccak256(_string2));
	}
    
    function initRoles()
        public
    {
        recordRole(5, "setInfo");
    }
 }