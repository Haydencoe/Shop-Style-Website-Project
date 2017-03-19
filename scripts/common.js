$(window).scroll(function() {
  // Darken the top navbar when scrolling down
  var scroll = $(window).scrollTop();
  if (scroll >= 50) {
    $(".top-navbar").addClass("dark");
  } else {
    $(".top-navbar").removeClass("dark");
  }
});

$(document).ready(function() {
  // Fade through slideshow on main page
  $("#slideshow > div:gt(0)").hide();
  setInterval(function() {
    $('#slideshow > div:first')
      .fadeOut(2000)
      .next()
      .fadeIn(2000)
      .end()
      .appendTo('#slideshow');
  }, 4000);
});

// Function that adds product to localstorage and navigates to cart page
function addCart(id, title, price) {
  localStorage.setItem(id, JSON.stringify({title: title, price: price}))
  location.href = 'https://haydencoe.github.io/Shop-Style-Website-Project/cart.html';
}
