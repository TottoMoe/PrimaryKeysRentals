var removeCartItemButtons = document.getElementsByClassName('btn-remove')
console.log(removeCartItemButtons)
for (var i = 0; i < removeCartItemButtons.length; i++) {
  var button = removeCartItemButtons[i]
  button.addEventListener('click', function(){
    console.log('clicked')
  })
}