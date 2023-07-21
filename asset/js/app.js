const scrollUp = document.querySelector("#scroll-up");

const navLinks = document.querySelector("#navLinks");


function navClose(){
   navLinks.style.right = "-250px"
}
function navOpen(){
    navLinks.style.right = "0"
}






// scrollUp

scrollUp.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });
  


  