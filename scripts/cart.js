$(function() {

  // Fill cart list with stored items
  var total = 0;
  for (var i = 0; i < localStorage.length; i++) {
    var itemId = localStorage.key(i),
      itemData = JSON.parse(localStorage.getItem(itemId));
    // Add up total as we go
    total += parseFloat(itemData.price.substr(1));
    $('#cart-list').append('<li id="' + itemId + '"><span class="item-price">' + itemData.price + '</span><a href="#" class="remove">Remove</a><span class="item-title">' + itemData.title + '</span></li>');
  }
  // Set total
  $('#cart-total').text('£' + total.toFixed(2));

  // Remove item from localstorage when the remove link is clicked
  $(document).on('click', '.remove', function(e) {
    var itemId = $(e.target).parent().attr('id');
    localStorage.removeItem(itemId);
    location.reload();
  })

});
