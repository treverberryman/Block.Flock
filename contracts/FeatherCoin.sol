pragma solidity ^0.4.4;

import "ConvertLib.sol";

// This is just a simple example of a coin-like contract.
// It is not standards compatible and cannot be expected to talk to other
// coin/token contracts. If you want to create a standards-compliant
// token, see: https://github.com/ConsenSys/Tokens. Cheers!

contract FeatherCoin {
	mapping (address => uint) balances;

	uint public storedData;
	uint public initialValue = 0;
	string public hash;

	event Transfer(address indexed _from, address indexed _to, uint256 _value);
	event NewMessage(address indexed _from, address indexed _to, string indexed _data);
	// Constructor
	function FeatherCoin() {
		balances[tx.origin] = 10000;
		storedData = initialValue;
	}

	function sendHash(address receiver, bytes32 hash) payable returns(bool sent) {
        NewMessage(msg.sender, receiver, hash);
        return true;
    }

	function sendCoin(address receiver, uint amount) returns(bool sufficient) {
		if (balances[msg.sender] < amount) return false;
		balances[msg.sender] -= amount;
		balances[receiver] += amount;
		Transfer(msg.sender, receiver, amount);
		return true;
	}

	function set(uint x) {
		storedData = x;
	}

	function get() constant returns (uint retVal) {
		return storedData;
	}

	function getBalanceInEth(address addr) returns(uint){
		return ConvertLib.convert(getBalance(addr),2);
	}

	function getBalance(address addr) returns(uint) {
		return balances[addr];
	}

	// function IPFSHash() public constant returns (string _hash) {
 //    	hash = _hash;
 //    	return hash;
 //  	}
}