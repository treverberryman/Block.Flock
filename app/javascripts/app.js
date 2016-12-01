var accounts;
var account;


function setStatus(message) {
  var status       = document.getElementById("status");
  status.innerHTML = message;
};

function printAddress() {
  var meta                  = FeatherCoin.deployed();
  var accounts = web3.eth.accounts;
  var account  = accounts[0];
  var from_address           = account;
  var address_element       = document.getElementById("address");
  address_element.innerHTML = from_address;

};

function refreshBalance() {
  var meta = FeatherCoin.deployed();
  var accounts = web3.eth.accounts;
  var account1 = accounts[0];
  meta.getBalance.call(account1, {from: account1}).then(function(value) {
    var balance_element       = document.getElementById("balance");
    balance_element.innerHTML = value.valueOf();
  }).catch(function(e) {
    console.log(e);
    setStatus("Error getting balance; see log.");
  });
};

function sendHash() {
  var meta = FeatherCoin.deployed();

  meta.IPFSHash(hash).then(function(value) {
    var hash = document.getElementById("hash").value;
    hash.innerHTML = value.valueOf();
  }).catch(function(e) {
    console.log(e);
    setStatus("Error sending file; see log.");
  });
};

function sendCoin() {
  var meta = FeatherCoin.deployed();

  var amount   = parseInt(document.getElementById("amount").value);
  var accounts = web3.eth.accounts;
  var account1 = accounts[0];
  var account2 = accounts[1];
  var sender   = account1;
  var receiver = account2;
  // var sender   = document.getElementById("sender").value;
  // var receiver = document.getElementById("receiver").value;
  // var sender   = document.getElementById("sender").value;
  //var receiver_addr = FeatherCoin.at(receiver);
  //console.log(receiver_addr.address);

  setStatus("Initiating transaction... (please wait)");
  meta.sendCoin(receiver, amount, {from: sender}).then(function() {
    sendHash();
    setStatus("Transaction complete!");
    refreshBalance();
  }).catch(function(e) {
    console.log(e);
    setStatus("Error sending coin; see log.");
  });
};

window.onload = function() {
  console.log(FeatherCoin.deployed());
  web3.eth.getAccounts(function(err, accs) {
    if (err != null) {
      alert("There was an error fetching your accounts.");
      return;
    }

    if (accs.length == 0) {
      alert("Couldn't get any accounts! Make sure your Ethereum client is configured correctly.");
      return;
    }

    accounts = accs;
    account  = accounts[0];
    

    var accounts = web3.eth.accounts;
    console.log(accounts);

    refreshBalance();
    printAddress();
    sendHash();
  });
}