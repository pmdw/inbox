pragma solidity ^0.4.17;
// version is 4.17
// first contract is inbox
contract Inbox{
 string public  message;  // new message is globally accessible instance variable 

 function Inbox(string initialMessage) public{
     message = initialMessage;
 }
   
 function setMessage(string newMessage) public {
     message = newMessage;
 }
 
// this duplicates "string public message;" 
// function getMessage() public view returns(string) {
//     return message;
// }
}