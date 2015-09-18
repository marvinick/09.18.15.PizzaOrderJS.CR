function Pizza(orderName, quantity, topping, spec) {
  this.orderName = orderName;
  this.quantity = quantity;
  this.topping = topping;
  this.spec = spec;
  this.pizzas = [];
}

Pizza.prototype.orderName = function() {
  return this.orderName;
}

Pizza.prototype.calculatePrice = function() {
  var quantity = 1;
  var topping = 1;
  var spec = "small";
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
  var pizzas = [];
  pizzas.push(totalPrice);
  eval(pizzas.join('+'));
  return pizzas;
};


// function resetFields() {
//     $("input#new-first-name").val("");
//     $("input#new-last-name").val("");
//     $("input.new-street").val("");
//     $("input.new-city").val("");
//     $("input.new-state").val("");
// }
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
    });
  });
});

// $("form#new-contact").submit(function(event) {
//     event.preventDefault();

//     var inputtedFirstName = $("input#new-first-name").val();
//     var inputtedLastName = $("input#new-last-name").val();

//     var newContact = new Contact(inputtedFirstName, inputtedLastName);

//     $(".new-address").each(function() {
//       var inputtedStreet = $(this).find("input.new-street").val();
//       var inputtedCity = $(this).find("input.new-city").val();
//       var inputtedState = $(this).find("input.new-state").val();

//       var newAddress = new Address(inputtedStreet, inputtedCity, inputtedState)
//       newContact.addresses.push(newAddress);
//     });


//     $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

//     $(".contact").last().click(function() {
//       $("#show-contact").show();

//       $("#show-contact h2").text(newContact.fullName());
//       $(".first-name").text(newContact.firstName);
//       $(".last-name").text(newContact.lastName);

//       $("ul#addresses").text("");

//       newContact.addresses.forEach(function(address) {
//         $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
//       });
//     });

//     resetFields()
//   });
// });
