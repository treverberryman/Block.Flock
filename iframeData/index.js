var ipfs = require('ipfs-api')();

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
    "<a target='_blank' href='http://localhost:9000/ipfs/"+hash+"'>"+hash+"</a>"
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('hashit').onclick = store
})