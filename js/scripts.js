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
    return this.cost;
  }


$(document).ready(function() {

  $("form#newOrder").submit(function(event) {
    event.preventDefault();

    var size = $("select#size").val();
    var meat = $("select#meat").val();
    var veggie = $("select#veggie").val();
    var sauce = $("select#sauce").val();
    var crust = $("select#crust").val();


    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");

    $(".contact").last().click(function(){
      $("#show-contact").toggle();
      $("#show-contact h2").text(newContact.fullName());
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);


   $("input#size").val("");
   $("input#meat").val("");
   $("input#veggie").val("");
   $("input#sauce").val("");
   $("input#crust").val("");

 });
});
});
