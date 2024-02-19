///////////////////Sticky Navbar//////////////////////////
const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY > 50) 
})

///////////////////toggle icon navbar////////////////////////// 

let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle("bx-x")
    navlist.classList.toggle("open");
}

window.onscroll = ()=>{
    menuIcon.classList.remove("bx-x")
    navlist.classList.remove("open");
}

//////////////////Submit Button///////////////////////////

document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Basic form validation
    var formElements = this.elements;
    for (var i = 0; i < formElements.length; i++) {
        if (formElements[i].type !== "submit" && formElements[i].value === "") {
            alert("Please fill in all fields");
            return;
        }
    }

    // You can process the form data here (e.g., send it to a server)
    console.log("Form submitted:", new FormData(this));
    // Display an alert indicating successful submission
    alert("Booking Successful! Thank you for your reservation.");
});



const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el)=>observer(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el)=>observer(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el)=>observer(el));