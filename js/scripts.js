function Order (pizzaSize,toppingMeat,toppingVeggie,toppingSauce,crustStyle) {
  this.pizzaSize = pizzaSize;
  this.toppingMeat = toppingMeat;
  this.toppingVeggie = toppingVeggie;
  this.toppingSauce = toppingSauce;
  this.crustStyle = crustStyle;
  this.cost = 0;
}

Order.prototype.costCalculate = function () {
  if (this.pizzaSize === "small") {
      this.cost += 3;
    } else if (this.pizzaSize === "medium") {
      this.cost += 6;
    } else if (this.pizzaSize === "large") {
      this.cost += 9;
    }
  if (this.toppingMeat === "pepperoni") {
      this.cost += 1;
    } else if (this.toppingMeat === "bacon") {
      this.cost += 2;
    } else if (this.pizzaSize === "chicken") {
      this.cost += 3;
    }
  if (this.toppingVeggie === "onions") {
      this.cost += 1;
    } else if (this.toppingVeggie === "olives") {
      this.cost += 1;
    } else if (this.toppingVeggie === "mushrooms") {
      this.cost += 2;
    }
  if (this.toppingSauce === "red") {
      this.cost += 1;
    } else if (this.toppingSauce === "white") {
      this.cost += 2;
    } else if (this.toppingSauce === "garlic") {
      this.cost += 2;
    }
  if (this.crustStyle === "skinny") {
      this.cost += 1;
    } else if (this.crustStyle === "original") {
      this.cost += 2;
    } else if (this.crustStyle === "pan") {
      this.cost += 3;
    }
    return this.cost;
  }


$(document).ready(function () {

  $("form#newOrder").submit(function(event) {
    event.preventDefault();

    $("#show-order").toggle();

    var size = $("select#size").val();
    var meat = $("select#meat").val();
    var veggie = $("select#veggie").val();
    var sauce = $("select#sauce").val();
    var crust = $("select#crust").val();

    newOrder = new Order(size,meat,veggie,sauce,crust);
    newOrder.costCalculate();

    $("ul#show-order").text(newOrder.cost);
  });
});
