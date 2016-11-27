var ipfs = require('ipfs-api')();

/*
function store() {
  var toStore = document.getElementById('source').value;
  //TODO un-break this call:
  ipfs.files.add(new Buffer(toStore), function (err, res){
    if(err || !res) return console.error("ipfs add error", err, res);

    res.forEach(function(file) {
      console.log('successfully stored', file.Hash);
      //display(file.Hash); 
    });
  });
}

function display(hash) {
  ipfs.cat('some hash', function (err, stream) {
    var res = ''

    stream.on('data', function (chunk) {
      res += chunk.toString()
    })

    stream.on('error', function (err) {
      console.error('Oh nooo', err)    
    })

    stream.on('end', function () {
      console.log('Got:', res)
    })
  });
}
*/

//document.getElementById('hashit').onclick=store;

function store () {
  const file = document.getElementById('source').files[0]
  const reader = new FileReader()
  reader.onload = function () {
    var toStore = new Buffer(reader.result);
    ipfs.add(toStore, function (err, res) {
      if (err || !res) {
        return console.error('ipfs add error', err, res)
      }

      res.forEach(function (file) {
        console.log('successfully stored', file)
        display(file.path)
      })
    })
  }
  reader.readAsArrayBuffer(file)
}

function display (hash) {
  document.getElementById('hash').innerHTML =
    "<a href='http://localhost:9000/ipfs/"+hash+"'>"+hash+"</a>"
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('hashit').onclick = store
})