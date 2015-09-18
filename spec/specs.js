describe('Pizza', function() {
  it("creates a new Pizza with the given specifications", function() {
    var testPizza = new Pizza(2, "cheese", "XXL");
    expect(testPizza.quantity).to.equal(2);
    expect(testPizza.topping).to.equal("cheese");
    expect(testPizza.spec).to.equal("XXL");
    expect(testPizza.pizzas).to.eql([]);
  })
})

// describe('Contact', function() {
//   it("creates a new contact with the given specifications", function() {
//     var testContact = new Contact("Rita","Moreno");
//     expect(testContact.firstName).to.equal("Rita");
//     expect(testContact.lastName).to.equal("Moreno");
//     expect(testContact.addresses).to.eql([]);
//   });

//   it("adds the fullName method to all contacts", function() {
//     var testContact = new Contact("Sherlock","Holmes");
//     expect(testContact.fullName()).to.equal("Sherlock Holmes");
//   });
// });

// describe('Address', function() {
//   it("create a new address with given specifications", function() {
//     var testAddress = new Address("123 Main St", "Test City","Test State");
//     expect(testAddress.street).to.equal("123 Main St");
//     expect(testAddress.city).to.equal("Test City");
//     expect(testAddress.state).to.equal("Test State");
//   });

//   it("adds the fulladdress method to all addresses", function() {
//     var testAddress = new Address("123 Main St", "Test City","Test State");
//     expect(testAddress.fullAddress()).to.equal("123 Main St, Test City, Test State");
//   })
// })