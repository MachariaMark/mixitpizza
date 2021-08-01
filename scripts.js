$(document).ready(function() {
  //MAGNIFIC POPUP
  $('.parent-container').magnificPopup({
      delegate: 'a', // child items selector, by clicking on it popup will open
      type: 'image',
      // other options
      //galery
      gallery:{enabled:true},
  });
  $('#myModal').on('shown.bs.modal', function () {
      $('#myInput').trigger('focus')
  });
});
// getting values for pizza
function getValue() {
  var getPizza = document.getElementById("pizza");
  var pizza =getPizza.options[getPizza.selectedIndex].value;
  var getSize = document.getElementById("size");
  var size = getSize.options[getSize.selectedIndex].value;
  var getCrust = document.getElementById("crust");
  var crust = getCrust.options[getCrust.selectedIndex].value;
  var getToppings = document.getElementById("delivery");
  var toppings = getToppings.options[getToppings.selectedIndex].value;
  var getAmount = document.getElementById("amount").value;
  var getTopping = document.getElementById("topping");
  var topping = getTopping.options[getTopping.selectedIndex].value;
  var getDelivery = document.getElementById("delivery");
  var delivery = getDelivery.options[getDelivery.selectedIndex].value;