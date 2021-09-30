
//  dark mode
console.log("Made with love by IT and Computer Department :)");
console.log(" Have a Good day  :)");
console.log(" Biryani is love :)");
console.log("Hello curious coder, Abdullah has a suprise for you! Find the bug and the treat is yours!");

function darkFunction() {
  const html = document.querySelector("html");
  html.classList.toggle("dark");
}

darkFunction();

// animation aos 
AOS.init({
  offset: 60,

  duration: 1000


});

// back to top

//Get the button
var mybutton = document.getElementById("myBtn");
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {

  $("html, body").animate(
    { scrollTop: "0" }, 800);
}



// back to top ENDDD

// SMOOTH SCROLLING
$('.smooth').on('click', function (event) {
  if (this.hash !== '') {
    event.preventDefault();
    const hash = this.hash;
    $('html,body').animate(
      {
        scrollTop: $(hash).offset().top
      }, 800

    );
  }
});
//ENDD

// FILTER CODE
$(document).ready(function () {
  var dept=sessionStorage.getItem('filter') === null? null:$("#"+sessionStorage.getItem('filter')).attr('id')
  if(dept=== "ALL")
   filterAll()
 else if(dept!=null)
   filterDepartment(dept)
   
 $('.category_item').click(function () {
   var category = $(this).attr('id')
   console.log(category)
   if (category == 'ALL') {
    filterAll()
   } else {
    filterDepartment(category)
   }
   //adding filters to session storage
   sessionStorage.setItem('filter', category);
 })
})
function filterAll(){
 $('.event_item').addClass('hide');
 $('.event_item').addClass('show');

 $('.event_item').removeClass('hide');
 setTimeout(function () {
   $('.event_item').removeClass('show');
 }, 350);
}
function filterDepartment(dept){
 $('.event_item').addClass('hide');
 $('.' + dept).addClass('show');
 $('.' + dept).removeClass('hide');
 setTimeout(function () {
   $('.' + dept).removeClass('show');
 }, 350);
}

// accordion
var accItem = document.getElementsByClassName('accordionItem');
var accHD = document.getElementsByClassName('accordionItemHeading');
for (i = 0; i < accHD.length; i++) {
  accHD[i].addEventListener('click', toggleItem, false);
}
function toggleItem() {
  var itemClass = this.parentNode.className;
  for (i = 0; i < accItem.length; i++) {
    accItem[i].className = 'accordionItem close';
  }
  if (itemClass == 'accordionItem close') {
    this.parentNode.className = 'accordionItem open ';
  }
}
