function Pizza(orderName, quantity, topping, spec) {
  this.orderName = orderName;
  this.quantity = quantity;
  this.topping = topping;
  this.spec = spec;
  this.pizzas = [];
}

Pizza.prototype.calculatePrice = function() {
  var quantity = 1;
  var topping = 1;
  var price = 2;

  if (this.quantity >= 1 && this.topping >= 1 && this.spec == "small")  {
    var totalPrice = price * this.quantity * this.topping;
    return totalPrice;
  } else if (this.quantity >= 1 && this.topping >= 1 && this.spec == "medium") {
    var totalPrice = (price * this.topping) + 1.50;
    return totalPrice;
  } else if (this.quantity >= 1 && this.topping >= 1 && this.spec == "large") {
    var totalPrice = (price * this.topping) + 4;
    return totalPrice;
  } else if (this.quantity >= 1 && this.topping >= 1 && this.spec == "XXL") {
    var totalPrice = (price * this.topping) + 7 ;
    return totalPrice;
  }
};

function resetForm() {
    $("input#new-order-name").val("");
    $("input#new-quantity").val("");
    $("input#new-topping").val("");
    $("select#sizeDropDown").val("");
}

$(document).ready(function() {
  $("form#new-pizza").submit(function(event) {
    event.preventDefault();

    var inputtedOrderName = $("input#new-order-name").val();
    var inputtedQuantity = $("input#new-quantity").val();
    var inputtedTopping = $("input#new-topping").val();
    var inputtedSize = $("select#sizeDropDown :selected").val();

    var newPizza = new Pizza (inputtedOrderName, inputtedQuantity, inputtedTopping, inputtedSize);

    $("ul#pizzas").append("<li><span class='pizza'>" + inputtedOrderName + "</span></li>");

    $(".pizza").last().click(function() {
      $("#show-order").show();

      $("#show-order h3").text(inputtedOrderName);
      $(".quantity").text(inputtedQuantity);
      $(".topping").text(inputtedTopping);
      $(".spec").text(inputtedSize);
      $("#price").text(newPizza.calculatePrice());
    });
  resetForm();
  });
});
