$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

    })
});


document.querySelector('.menu_btn').addEventListener("click", () => {
    document.querySelector('.menu').classList.toggle('menu_go');
})

document.querySelector('.cross_btn').addEventListener("click", () => {
    document.querySelector('.menu').classList.toggle('menu_go');
})

document.querySelector('.btn3').addEventListener("click", () => {
    document.querySelector('.menu').style.display = 'none'  
})
document.querySelector('.btn4').addEventListener("click", () => {
    document.querySelector('.menu').style.display = 'none'  
})
document.querySelector('.btn5').addEventListener("click", () => {
    document.querySelector('.menu').style.display = 'none'  
})
document.querySelector('.btn6').addEventListener("click", () => {
    document.querySelector('.menu').style.display = 'none'  
})
document.querySelector('.btn7').addEventListener("click", () => {
    document.querySelector('.menu').style.display = 'none'  
})

