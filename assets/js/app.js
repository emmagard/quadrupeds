$(document).foundation();


// when you click on the anchor tags in the about us section:
var staff = document.getElementById('staff');
var serviceArea = document.getElementById('service-area');
var faqs = document.getElementById('faqs');

var showText = function(){
  console.log("show text");
  var icon = this.children[0];
  var hiddenText = this.parentElement.nextElementSibling;

  // toggle hidden text
  hiddenText.classList.toggle("visible");
  // toggle chevron icon
  icon.classList.toggle("fa-chevron-down");

};

staff.onclick = showText;
serviceArea.onclick = showText;
faqs.onclick = showText;


