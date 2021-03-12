var typed = new Typed(".typing", {
    strings: ["Front-end Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});


function openNav() {
    document.getElementById("mySidebar").style.width = "110px";
    document.getElementById("main").style.marginLeft = "110px";
    document.getElementById('main').style.opacity = "0";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.getElementById('main').style.opacity = "1";
}
