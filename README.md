# Block.Flock
Decentralized Application for LSU computing students.

# Programs to install:

IPFS: https://ipfs.io/docs/install/
ethereumjs-testrpc: https://github.com/ethereumjs/testrpc
Truffle Framework: http://truffleframework.com/
Node.js / NPM: https://docs.npmjs.com/getting-started/installing-node
http-server: This was built in on Mac OS

# How to run:

Open a bash terminal and run these commands:

# Tab 1
> testrpc

# Tab 2
> ipfs daemon

# Tab 3
Navigate to the main Dapp directory
> truffle serve

# Tab 4
Navigate to the iframeData directory
> http-server -a 127.0.0.1 -p 8888

# Tab 5
Navigate to the copytest directory in ~/app/
> truffle serve -p 8082

# Tab 6
Navigate to the iframeData directory in ~/app/copytest/
> http-server -a 127.0.0.1 -p 8889

# Now open up chrome to
localhost:8080

