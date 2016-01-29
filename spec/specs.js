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
    var testOrder = new Order("small","pepperoni", "onions", "red", "pan");
    expect(testOrder.costCalculate()).to.equal(9);
  });
});
