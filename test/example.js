contract('example', function(accounts) {
  it("should assert true", function(done) {
  	var Example = example.at(example.deployed_address);

  	Exmaple.value.call().then(function(value) {
  		assert.equal(value, 0, "Value should be zero after deployment.");
  	}).then(done).catch(done);
  });
});