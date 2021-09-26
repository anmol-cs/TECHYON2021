
//  dark mode
console.log("Made with love by Computer Department :)");

function darkFunction() {
  const html = document.querySelector("html");
  html.classList.toggle("dark");
}

darkFunction();



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
$(document).ready(function()
{
  $('.category_item').click(function()
  {
    var category =$(this).attr('id');
    if(category == 'ALL')
    { 
      $('.event_item').addClass('hide');
      $('.event_item').addClass('show');
      
        $('.event_item').removeClass('hide');
        setTimeout(function() {
          $('.event_item').removeClass('show');
      }, 250);
        
       
      
    } else  
    {
      $('.event_item').addClass('hide');
      $('.'+category).addClass('show');
        $('.'+category).removeClass('hide');
        setTimeout(function() {
          $('.'+category).removeClass('show');
      }, 250);
       
      
     
      
    }
  })
})
// function filterObject(c) {
//   var x, i;
//   x = document.getElementsByClassName("cardE");
//   if (c == "all") {
//     c = "";
//   } else {

//   }

//   for (i = 0; i < x.length; i++) {
//     removeClass(x[i], "block");
//     removeClass(x[i], "hidden");
//     if (x[i].className.indexOf(c) > -1) {
//       addClass(x[i], "block");

//     } else {
//       addClass(x[i], "hidden");
//     }
//   }
// }
// function addClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     if (arr1.indexOf(arr2[i]) == -1) {
//       element.className += " " + arr2[i];
//     }
//   }
// }
// function removeClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     while (arr1.indexOf(arr2[i]) > -1) {
//       arr1.splice(arr1.indexOf(arr2[i]), 1);
//     }
//   }
//   element.className = arr1.join(" ");
// }
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