$(document).foundation();


// when you click on the anchor tags in the about us section:
var faqs = document.getElementById('faqs');
var about = document.getElementById('about');
var servicesAndRates  = document.getElementById('services-and-rates');
var contact = document.getElementById('contact');

var showText = function(){
  console.log("show text");
  //var icon = this.children[0];
  var hiddenText = this.parentElement.nextElementSibling;

  // toggle hidden text
  hiddenText.classList.toggle("visible");
  // toggle chevron icon
  //icon.classList.toggle("fa-chevron-down");

};

//faqs.onclick = showText;
about.onclick = showText;
servicesAndRates.onclick = showText;
contact.onclick = showText;

