function newItem() {
  //1. Adding a new item to the list of items:
  const li = $('<li>');
  const inputValue = $('#input').val();
  li.text(inputValue);

  if (inputValue === '') {
    alert('You must write something!');
  } else {
    $('#list').append(li);
    // clear out the input and get it ready for mor input
    $('#input').val('').focus();
  }

  //2. Crossing out an item from the list of items:
  li.dblclick(() => li.toggleClass('strike'));

  //3(i). Adding the delete button "X":
  const crossOutButton = $('<button>').addClass('crossOutButton').text('X');
  li.append(crossOutButton);

  //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
  crossOutButton.click(() => li.addClass('delete'));

  // 4. Reordering the items:
  $('#list').sortable();
}
