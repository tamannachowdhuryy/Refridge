// Donate
var submit= $(`.submit-btn`);
submit.on("click", addContact);
var cardContainer = $('.card-container');

function addContact(event){
  event.preventDefault()
;
var name= $(`.name`).val();
  cardContainer.append(`<div class="info">
  <p>Thank you so much ${name}! </p>
  </div>`)

  var nameInput = $(`.name`);
  nameInput.val("");
}


