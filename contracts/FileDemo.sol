pragma solidity ^0.4.2;

import "ConvertLib.sol";

contract FileDemo {	
	
	/* function FileDemo() {
		owner = msg.sender;
		//balances[tx.origin] = 10000;
		//storedData = initialValue;
	}	


	event FileAdded(address indexed user, string indexed name, bool indexed success);
	event FileRemoved(address indexed user, string indexed name, bool indexed success);
	event FileUpdated(address indexed user, string indexed name, bool indexed success);
	event OwnershipTransferred(address indexed user, string indexed name, bool indexed success);

	// the IPFS hash of the file
	struct FileData {
		address owner;
		string name;
		byte ipfsHash;
	}
	// List element
	struct Element {
		string prev;
		string next;
		// Data
		FileData fileData;
	}

	address public owner;

	// List size
	uint public size;
	// Current tail
	uint public tail;
	// Current head
	string public head;
	// Mapping where elements are stored
	mapping (string => Element) list;

	function addFile(string name, byte fileHash) constant returns (bool result) {
		Element elem = list[name];
		
		// If there is already a file with this name, abort.
		if(elem.fileData.owner != 0x0) {
			FileAdded(msg.sender, name, false);
			return false;
		}

		// Owner is the uploader.
		elem.fileData.owner    = msg.sender;
		elem.fileData.name     = name;
		elem.fileData.ipfsHash = fileHash;

		if(size == 0) {
			tail = name;
			head = name;
		}
		else {
			list[head].next = name;
			list[head].prev = head;
			head = name;
		}

		// Increase the size of the list by one
		size++;
		FileAdded(msg.sender, name, true);
		return true;
	}

	function transferOwnership(string name, address newOwner) constant returns (bool result) {
		Element elem = list[name];

		address fileOwner = elem.fileData.owner;

		if(fileOwner != msg.sender) {
			OwnershipTransferred(msg.sender, name, false);
			return false;
		}

		elem.fileData.owner = newOwner;
		OwnershipTransferred(msg.sender, name, true);
		return true;
	}

	function updateFile(string name, address newHash) constant returns (bool result) {
		Element elem = list[name];
		if(elem.fileData.owner != msg.sender) {
			FileUpdated(msg.sender, name, false);
			return false;
		}
		elem.fileData.ipfsHash = newHash;
		FileUpdated(msg.sender, name, true);
		return true;
	}

	function removeFile(string name) constant returns (bool result) {
		Element elem = list[name];

		address fileOwner = elem.fileData.owner;

		if(elem.fileData.owner != msg.sender) {
			FileUpdated(msg.sender, name, false);
			return false;
		}
		if(size == 1) {
			tail = "";
			head = "";
		}
		else if(name == head) {
			head = elem.prev;
			list[head].next = "";
		}
		else if(name == tail) {
			tail = elem.next;
			list[tail].prev = "";	
		}
		else {
			string prevElem = elem.prev;
			string nextElem = elem.next;
			list[prevElem].next = nextElem;
		}
		size--;
		delete list[name];
		FileRemoved(msg.sender, name, true);
		return true;
	}

	function getElement(string name) constant returns (string prev, string next, string owner, string fileName, byte fileHash) {
		Element elem = list[name];
		if(elem.fileData.owner == 0x0) {
			return;
		}

		prev     = elem.prev;
		next     = elem.next;
		owner    = elem.fileData.owner;
		fileName = elem.fileData.name;
		fileHash = elem.fileData.ipfsHash;

	}

	function getFile(string name) constant returns(address owner, string fileName, byte fileHash) {
		Element elem = list[name];
		if(elem.fileData.owner == 0x0) {
			return;
		}
	} */
}