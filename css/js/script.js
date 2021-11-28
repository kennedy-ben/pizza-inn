/* eslint-disable no-alert */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
/* eslint-disable no-fallthrough */
/* eslint-disable no-console */
/* eslint-disable no-undef */
let price; let crust_price; let
  topping_price;
let total = 0;
function Getpizza(name, size, crust, topping, total) {
  this.name = name;
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.total = total;
}

// proceed button
$(document).ready(() => {
  // $("button.proceed").click(function(){
  //   $("button.proceed").hide();
  //   $("#information").hide();
  //   $("div.choise").slideDown(1000);
  // });
  $('button.proceed').click((event) => {
    const psize = $('#size option:selected').val();
    const pcrust = $('#crust option:selected').val();
    const ptopping = [];
    $.each($("input[name='toppings']:checked"), function () {
      ptopping.push($(this).val());
    });
    console.log(ptopping.join(', '));

    switch (psize) {
      case '0':
        price = 0;
        break;
      case 'large':
        price = 1900;
        console.log(price);
        break;
      case 'medium':
        price = 1000;
        console.log(`The price is ${price}`);
        break;
      case 'small':
        price = 850;
        console.log(price);
      default:
        console.log('error');
    }
    switch (pcrust) {
      case '0':
        crust_price = 0;
        break;
      case 'Crispy':
        crust_price = 200;
        break;
      case 'Stuffed':
        crust_price = 150;
        break;
      case 'Gluten-free':
        crust_price = 180;
        break;
      default:
        console.log('No price');
    }
    const topping_value = ptopping.length * 50;
    console.log(`toppins value${topping_value}`);

    if ((psize == '0') && (pcrust == '0')) {
      console.log('nothing selected');
      $('button.proceed').show();
      $('#information').show();
      $('div.choise').hide();
      alert('Please select pizza size and crust');
    } else {
      $('button.proceed').hide();
      $('#information').hide();
      $('div.choise').slideDown(1000);
    }

    total = price + crust_price + topping_value;
    console.log(total);
    let checkoutTotal = 0;
    checkoutTotal += total;

    $('#pizzaname').html($('.name option:selected').val());
    $('#pizzasize').html($('#size option:selected').val());
    $('#pizzacrust').html($('#crust option:selected').val());
    $('#pizzatopping').html(ptopping.join(', '));
    $('#totals').html(total);

    // Add pizza button
    $('button.addPizza').click(() => {
      const pname = $('.name option:selected').val();
      const psize = $('#size option:selected').val();
      const pcrust = $('#crust option:selected').val();
      const ptopping = [];
      $.each($("input[name='toppings']:checked"), function () {
        ptopping.push($(this).val());
      });
      console.log(ptopping.join(', '));
      switch (psize) {
        case '0':
          price = 0;
          break;
        case 'large':
          price = 1900;
          console.log(price);
          break;
        case 'medium':
          price = 1000;
          console.log(`The price is ${price}`);
          break;
        case 'small':
          price = 850;
          console.log(price);
        default:
          console.log('error');
      }
      switch (pcrust) {
        case '0':
          crust_price = 0;
          break;
        case 'Crispy':
          crust_price = 200;
          break;
        case 'Stuffed':
          crust_price = 200;
          break;
        case 'Gluten-free':
          crust_price = 180;
          break;
        default:
          console.log('No price');
      }
      const topping_value = ptopping.length * 50;
      console.log(`toppins value${topping_value}`);
      total = price + crust_price + topping_value;
      console.log(total);

      checkoutTotal += total;
      console.log(checkoutTotal);
      // constractor function
      const newOrder = new Getpizza(pname, psize, pcrust, ptopping, total);

      $('#ordersmade').append(`<tr><td id="pizzaname">${newOrder.name}</td><td id="pizzasize">${newOrder.size}</td><td id="pizzacrust">${newOrder.crust}</td><td id="pizzatopping">${newOrder.topping}</td><td id="totals">${newOrder.total}</td></tr>`);
      console.log(newOrder);
    });
    // Checkout button
    $('button#checkout').click(() => {
      $('button#checkout').hide();
      $('button.addPizza').hide();
      $('button.deliver').slideDown(1000);
      $('#addedprice').slideDown(1000);
      console.log(`Your total bills is sh. ${checkoutTotal}`);
      $('#pizzatotal').append(`Your bill is sh. ${checkoutTotal}`);
    });

    // home delivery button
    $('button.deliver').click(() => {
      $('.pizzatable').hide();
      $('.choise h2').hide();
      $('.delivery').slideDown(1000);
      $('#addedprice').hide();
      $('button.deliver').hide();
      $('#pizzatotal').hide();
      const deliceryamount = checkoutTotal + 150;
      console.log(`You will pay sh. ${deliceryamount} on delivery`);
      $('#totalbill').append(`Your bill plus delivery fee is: ${deliceryamount}`);
    });

    // when one clicks place order button
    $('button#final-order').click((event) => {
      event.preventDefault();

      $('#pizzatotal').hide();
      $('.delivery').hide();
      $('button#final-order').hide();
      const deliceryamount = checkoutTotal + 150;
      console.log(`Final Bill is: ${deliceryamount}`);
      const person = $('input#name').val();
      const location = $('input#location').val();

      if ($('input#name').val() && $('input#phone').val() && $('input#location').val() != '') {
        $('#finallmessage').append(`${person}, We have recieved your order and it will be delivered to you at ${location}. Prepare sh. ${deliceryamount}`);
        $('#totalbill').hide();
        $('#finallmessage').slideDown(1200);
      } else {
        alert('Please fill in the details for delivery!');
        $('.delivery').show();
        $('button#final-order').show();
      }
    });
    event.preventDefault();
  });
});
