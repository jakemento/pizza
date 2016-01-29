describe('Order', function(){
  it("creates a new Order with the given properties", function(){
    var testOrder = new Order("small","pepperoni","onions", "red","pan");
    expect(testOrder.pizzaSize).to.equal("small");
    expect(testOrder.toppingMeat).to.equal("pepperoni");
    expect(testOrder.toppingVeggie).to.equal("onions");
    expect(testOrder.toppingSauce).to.equal("red");
    expect(testOrder.crustStyle).to.equal("pan");
  });
  it("adds the cost calculator method", function(){
    var testOrder = new Order("small","pepperoni","onions", "red","pan");
    expect(testOrder.costCalculate).to.equal(8);
  });
});
//
//
//
// describe('Contact', function(){
//   it("creates a new contact with the given properties", function(){
//     var testContact = new Contact("Rita","Moreno");
//     expect(testContact.firstName).to.equal("Rita");
//     expect(testContact.lastName).to.equal("Moreno");
//     expect(testContact.addresses).to.eql([]);
//   });
//   it("adds the fullName method to all contacts", function(){
//     var testContact = new Contact("Sherlock", "Holmes");
//     expect(testContact.fullName()).to.equal("Sherlock Holmes");
//   })
// });
//
// describe('Address', function() {
//   it("creates a new address with the given specifications", function() {
//     var testAddress = new Address("432 Main St", "Test City", "Test State");
//     expect(testAddress.street).to.equal("432 Main St");
//     expect(testAddress.city).to.equal("Test City");
//     expect(testAddress.state).to.equal("Test State");
//   });
//   it("adds the fullAddress method to all addresses", function() {
//     var testAddress = new Address("123 Main St", "Test City","Test State");
//     expect(testAddress.fullAddress()).to.equal("123 Main St, Test City, Test State");
//   });
//
// });
