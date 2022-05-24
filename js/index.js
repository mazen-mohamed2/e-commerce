const openNav = document.querySelector(".open-btn");
const closeNav = document.querySelector(".close-btn");
const menu = document.querySelector(".nav-list");

const menuLeft = menu.getBoundingClientRect().left;
openNav.addEventListener("click", () => {
  if (menuLeft < 0) {
    menu.classList.add("show");
  }
});

closeNav.addEventListener("click", () => {
  if (menuLeft < 0) {
    menu.classList.remove("show");
  }
});

// Fixed Nav
const navBar = document.querySelector(".nav");
const navHeight = navBar.getBoundingClientRect().height;
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;
  if (scrollHeight > navHeight) {
    navBar.classList.add("fix-nav");
  } else {
    navBar.classList.remove("fix-nav");
  }
});

// Scroll To
const links = [...document.querySelectorAll(".scroll-link")];
links.map(link => {
  if (!link) return;
  link.addEventListener("click", e => {
    e.preventDefault();

    const id = e.target.getAttribute("href").slice(1);

    const element = document.getElementById(id);
    const fixNav = navBar.classList.contains("fix-nav");
    let position = element.offsetTop - navHeight;

    window.scrollTo({
      top: position,
      left: 0,
    });

    navBar.classList.remove("show");
    menu.classList.remove("show");
    document.body.classList.remove("show");
  });
});


let po = document.querySelectorAll(".fa-shopping-cart");
// po.forEach((eo) => {
//   eo.addEventListener("click", () => {
    
//     if (eo.style.color !== "green") {
//       eo.style.color = "green"
//     }else{
//       eo.style.color = "black"
//     }
//   })
// })

// for (let i = 0; i < po.length; i++) {
//   po[i].addEventListener("click", () =>{
//       if (po[i].style.color !== "green") {
//               po[i].style.color = "green"
//             }else{
//               po[i].style.color = "black"
//             }
//     })
// }



// let heart = document.querySelectorAll(".fa-heart");

// heart.forEach(islam => {
//   islam.addEventListener("click", () => {
//     if (islam.style.color !== "red") {
//       islam.style.color = "red"
//     }else{
//       islam.style.color = "#000"
//     }
//   })
// })



$(document).ready(function () {
  $(po).each(function (index) {
    $(po[index]).click(function () { 
      if (po[index].style.color !== "green") {
        $(po[index]).css("color", "green");
      } else {
        $(po[index]).css("color", "black");
      }
    });
    
  });
});







