var accounts;
var account;

function setStatus(message) {
  var status = document.getElementById("status");
  status.innerHTML = message;
};

function printAddress() {
  var meta = FeatherCoin.deployed();
  var address_element = document.getElementById("address");
  var cur_address = meta.address;
  address_element.innerHTML = cur_address;
};

function refreshBalance() {
  var meta = FeatherCoin.deployed();

  meta.getBalance.call(account, {from: account}).then(function(value) {
    var balance_element = document.getElementById("balance");
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
  var receiver = document.getElementById("receiver").value;

  setStatus("Initiating transaction... (please wait)");

  meta.sendCoin(receiver, amount, {from: account}).then(function() {
    sendHash();
    setStatus("Transaction complete!");
    refreshBalance();
  }).catch(function(e) {
    console.log(e);
    setStatus("Error sending coin; see log.");
  });
};

window.onload = function() {
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
    account = accounts[0];

    printAddress();
    sendHash();
    refreshBalance();
  });
}