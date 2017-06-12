
$(document).ready(function() {

var burg = {
  "Small": {
    "price" : 17,
    "calories" : 250
  },
  "Big" : {
    "price" : 25,
    "calories" : 340
}
};

var part  = {
  "Cheese": {
    "price" : 4,
    "calories" : 25
},
  "Salat" : {
    "price" : 5,
    "calories" : 5
},
"Ham" : {
  "price" : 10,
  "calories" : 50
}
};


var sauces  = {
  "Sauce": {
    "price" : 5,
    "calories" : 0
  },
  "Mayonnaise" : {
    "price" : 4,
    "calories" : 10
  }
};
var checked = [];
var p1 = 0;
var p2 = 0;
var p3 = 0;
var rez1='';
var summ_price = 0;
var summ_calories = 0;


  function selectOptions() {
    for (let key in burg) {
      var burger = document.createElement('option');
      burger.innerHTML = key + ' -    Price:  ' + burg[key].price +' grn. ' + '  Calories:  ' + burg[key].calories;
      burger.value = key;
      document.querySelector('#inp1').append(burger);
    }

    for (let key in part) {
      let part1 = document.createElement('option');
      part1.innerHTML = '   ' + key + ' - ' + part[key].price + ' - ' + part[key].calories;
      part1.value = key;
      document.querySelector('#inp2').append(part1);
    }

    for (let key in sauces) {
      let part2 = document.createElement('option');
      part2.innerHTML = '   ' + key + ' - ' + sauces[key].price + ' - ' + sauces[key].calories;
      part2.value = key;
      document.querySelector('#inp3').append(part2);
    }
  }

    setTimeout(() => {
      $('select').material_select();
      $('#inp2').material_select();
      $('#inp3').material_select();
    }, 800)

  selectOptions();


  $("#but1").click(function() {

burg_checked = document.querySelector('#inp1').value;

var gr = document.getElementsByClassName('select-dropdown');
part_checked = gr[0].value;
if (part_checked == "") {
  alert("Select one or more parts!")
}
var arr_part_checked = part_checked.split(', ');

var gr2 = document.getElementsByClassName('select-dropdown');
sauces_checked = gr2[2].value;
var arr_sauces_checked = sauces_checked.split(', ');

for (let key in burg) {
  if (key==burg_checked) {
    summ_price = summ_price + burg[key].price;
    summ_calories = summ_calories + burg[key].calories;
  }}

for (let key in part) {
  for (var i = 0; i < arr_part_checked.length; i++) {
      if ('   ' + key + ' - ' + part[key].price + ' - ' + part[key].calories==arr_part_checked[i]) {
      summ_price = summ_price + part[key].price;
      summ_calories = summ_calories + part[key].calories;


  }}}

for (let key in sauces) {
  for (var i = 0; i < arr_sauces_checked.length; i++) {
      if ('   ' + key + ' - ' + sauces[key].price + ' - ' + sauces[key].calories==arr_sauces_checked[i]) {
      summ_price = summ_price + sauces[key].price;
      summ_calories = summ_calories + sauces[key].calories;
}}}

document.querySelector('#out2').innerHTML = '';
document.querySelector('#out3').innerHTML = '';
document.querySelector('#out4').innerHTML = '';

let out2 = document.createElement('p');
out2.innerHTML = 'You choose: ' + burg_checked + ' burger ' + ' with: ' + part_checked + ', '+ sauces_checked + '.';
$('#out2').append(out2);

let out3 = document.createElement('p');
out3.innerHTML = 'Price: ' + summ_price +' grn.' + ' Calories: ' + summ_calories;
$('#out3').append(out3);

let out4 = document.createElement('p');
out4.innerHTML = 'Bon Appetit!';
$('#out4').append(out4);

summ_price = 0;
summ_calories = 0;

})
})
