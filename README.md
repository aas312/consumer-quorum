## Trying out quorum and solidity

Trying out quorum and solidity.  

I want to use modifiers to check if a user can execute a function.

Role.sol
contains mapping of role to a function.  this is very basic. right now i just
want to assign one uint8 number to one string function

User.sol
contains mapping of user to their role

BaseContract.sol
contains the modifier that accepts th user's uid, gets the role and then checks if the 
role is mapped to the string function.
BaseContract will be inherited by other other contracts.

Consumer.sol
Basically this is simple contract with get and set function.  
getInfo is available for everyone.
setInfo requires the senderId/uid to have role 5.

## Prereqs

Quroum 7 node example
node v8.9.x
truffle v4.1.6 (because this version compiles with solidity v0.4.21)

# deploying contracts
```npm run buid``` removes the build folder, does truffle compile and truffle migrate.

On migrate call the initRoles(), which will record 5 to setInfo, in Role.sol.

# running test
```npm run test``` executes the tests in the mochatests folder.

# running the app
```node sandbox.js``` 
record a user with role 5
get the user role
set the info using the user created above
get the info