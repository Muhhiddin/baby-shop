const sliderItems = document.querySelectorAll('.slider li');
let mainPicture = document.querySelector('.main_picture');
let mainPicImage = mainPicture.querySelector('img');

for (let sliderLiItem of sliderItems)
{
    sliderLiItem.addEventListener('click', function () {
        let imageSrc = this.querySelector('img').getAttribute('src');
        mainPicImage.setAttribute('src', imageSrc);
    });
}
/*function menu() {
    let mobileMenu = document.getElementById("mobile-menu");
    mobileMenu.classList.add("active");
    let menuItems = document.getElementById("menu__link");
    menuItems.classList.remove("active");
}*/

let navMenu = document.getElementById("mobile-menu")
let menuLink = document.getElementById("menu__link")
let menuClose = document.getElementById("menu__close")

//Display Mobile Menu


menuLink.addEventListener('click', () => {
    navMenu.classList.add('active');
});

menuClose.addEventListener('click', () => {
    navMenu.classList.remove('active');
});

let IncItem = document.getElementById("increase")
let DecItem = document.getElementById("decrease")
let InputItem = document.getElementById("cnt")

IncItem.addEventListener('click', () => {
    InputItem.value = parseInt(InputItem.value)+1;
});

DecItem.addEventListener('click', ()=> {
    InputItem.value = parseInt(InputItem.value)-1;
    if (InputItem.value < 1){
        InputItem.value = 1;
    }
})

//scroll menu
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("all__menu").style.top = "0";
    } else {
        document.getElementById("all__menu").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
}

let btn = document.querySelector('.add__btn')

btn.addEventListener('click', () =>{
    alert('add success');
});


let add__heart = document.querySelector('.add__heart')

add__heart.addEventListener('click', () =>{
    alert('added to favorite');
});

//email validation

let btnEmail = document.querySelector('.email_btn');
let email = document.querySelector('.email');
let formMessage = document.querySelector('.form_message');


btnEmail.addEventListener('click', () => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
    {
        formMessage.textContent = 'Спасибо за подписку';

        // Удаляем текст после 3 секунд и очищяем значение инпута
        setTimeout(function () {
            formMessage.textContent = '';
            email.value = '';
        }, 3000);

        return (true)
    }
    alert("Пожалуйста, введите действительный e-mail адрес.")
    return (false);
});