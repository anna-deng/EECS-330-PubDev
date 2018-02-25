function filtercards(){
  var cards = Array.from(document.getElementsByClassName('card'));
  var checks = Array.from(document.getElementsByClassName('causecheck')).concat(Array.from(document.getElementsByClassName('skillcheck')));
  checks = checks.filter(function(check){
    return check.checked;
  })

  checks = checks.map(function(check){
    return check.nextSibling.innerHTML
  })

  var removedCards = [];

  for (let i = 0; i<cards.length; i++) {
      var mycardblock = cards[i].querySelector('.card-block')
      var mytags = Array.from(mycardblock.querySelectorAll('.causetag')).concat(Array.from(mycardblock.querySelectorAll('.skilltag')));
      var toRemove = false;
      for (let j=0; j< mytags.length; j++){
          console.log(mytags)
          console.log(checks)
          if (!checks.includes(mytags[j].innerHTML)){
              toRemove = true;
              console.log('hello')
              break;
          }
      }
      if(toRemove){
          removedCards.push(cards[i])
      }
  }
  console.log(removedCards)
  for(var k= 0; k<removedCards; k++){
      removedCards[k].style.display = None;
    }
}
