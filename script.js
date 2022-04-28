window.onscroll = function() {scrollFunction(), reveal()};

var navbar = document.getElementById("navbar");
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "25px 200px";
    document.getElementById("navbar").style.backgroundColor = "#CEAB93";
    document.getElementById("logo").style.fontSize = "30px";
    document.getElementById("logo").style.paddingLeft = "0px";
    document.getElementById("right").style.paddingRight = "0px";
    navbar.classList.add("sticky")
  } else {
    document.getElementById("navbar").style.padding = "35px 200px";
    document.getElementById("navbar").style.backgroundColor = "transparent";
    document.getElementById("logo").style.fontSize = "35px";
    document.getElementById("logo").style.paddingLeft = "0px";
    document.getElementById("right").style.paddingRight = "0px";
    navbar.classList.remove("sticky");
  }
}

function responsive() {
  var x = document.getElementById("navbar-right");
  if (x.className === "items") {
    x.className += " responsive";
  } else {
    x.className = "items";
  }
}

function openNav() {
  document.getElementById("mySidebar").style.width = "100%";
  document.getElementById("main").style.marginLeft = "100%";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 10;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}





  //window.addEventListener("scroll", reveal);

// const navLink = document.querySelectorAll('.navlink')

// function linkAction(){
//   navLink.forEach(n => n.classList.remove('active'))
//   this.classList.add('active')
// }

// navLink.forEach(n => n.addEventListener('click', linkAction))