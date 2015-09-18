describe('Pizza', function() {
  it("creates a new Pizza with the given specifications", function() {
    var testPizza = new Pizza("merv", 1, 1, "XXL");
    expect(testPizza.orderName).to.equal("merv");
    expect(testPizza.quantity).to.equal(1);
    expect(testPizza.topping).to.equal(1);
    expect(testPizza.spec).to.equal("XXL");
    expect(testPizza.pizzas).to.eql([]);
  })
})

describe("calculatePrice", function() {
  it("is minimum $2 for basic small pizza ", function() {
    var testPizza = new Pizza("merv", 1, 1, "small");
    expect(testPizza.calculatePrice()).to.equal(2);
  })

  it("extra $2 for adding quantity", function() {
    var testPizza = new Pizza("merv", 2, 1, "small");
    expect(testPizza.calculatePrice()).to.equal(4);
  })

  it("extra $1 for adding topping", function() {
    var testPizza = new Pizza("merv", 1, 2, "small");
    expect(testPizza.calculatePrice()).to.equal(4);
  })

  it("extra $1.50 for size medium", function() {
    var testPizza = new Pizza("merv", 1, 1, "medium");
    expect(testPizza.calculatePrice()).to.equal(3.50);
  })

  it("extra $4 for size large", function() {
    var testPizza = new Pizza("merv", 1, 1, "large");
    expect(testPizza.calculatePrice()).to.equal(6);
  })
  it("extra $7 for size XXL", function() {
    var testPizza = new Pizza("merv", 1, 1, "XXL");
    expect(testPizza.calculatePrice()).to.equal(9);
  })

  // it("calculate all Prices from different types of pizza", function() {
  //   var testPizza = new Pizza(1,1,4);
  //   var testPizza = new Pizza(2,1,1);
  //   expect(testPizza.calculatePrice()).to.equal([11]);
  // })
})


