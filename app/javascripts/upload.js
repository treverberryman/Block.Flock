var ipfs = require('ipfs-api')();
//var ipfs = window.IpfsApi('localhost', '5001');
function store() {
    var toStore = document.getElementById('files').value;
    //TODO un-break this call:
    if(typeof Buffer != 'undefined' && Buffer.prototype) {
        ipfs.files.add(new Buffer(toStore), function (err, res) {
            if(err || !res) return console.error("ipfs add error", err, res);
            res.forEach(function(file) {
                console.log('successfully stored', file.Hash);
                display(file.Hash);
            });
        });
    }
    document.getElementById('hashit').onclick = store();
}

