var removeCartItemButtons = document.getElementsByClassName('btn-remove')
console.log(removeCartItemButtons)
for (var i = 0; i < removeCartItemButtons.length; i++) {
  var button = removeCartItemButtons[i]
  button.addEventListener('click', function(event){
   var buttonClicked = event.target
   buttonClicked.parentElement.parentElement.remove()
   updateCartTotal()
  })
}

function updateCartTotal(){
  var cartItemContainer = document.getElementsByClassName('card-display')[0]
  var cartRows = cartItemContainer.getElementsByClassName('card-row')
  for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i]
  }
}

let generateCartItems = () => {
  if(basket.length !==0){
    console.log("basket is not empty")
  }
  else{
    console.log("basket is empty")
  }
};


// document.addEventListener('DOMContentLoaded', () => {
//   const cartAdd = document.querySelector('#testCar');

//   document.querySelector('#card-btn').addEventListener('click', (e) => {
//     e.preventDefault();

//   })
// })

document.getElementById("#card-btn").onclick = function() {
  $('#testCar').appendTo('cartBasket');
}