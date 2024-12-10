
//Скрипт для меню
const btn = document.querySelector("#menu_ori_phone");
const menu = document.querySelector("#menu");
//btn змінна, яка зберігає посилання на кнопку меню для мобільної версії
btn.addEventListener("click", () => {
    menu.classList.toggle("disp");
});

//Скрипт для якорей
const anchors = document.querySelectorAll('a[href*="#menu_"]');

for (let anchor of anchors) {
    anchor.addEventListener("click", (event) => {
        event.preventDefault(); //відміняє стандартну поведінку посилання
        const blockID = anchor.getAttribute("href");
        document.querySelector("" + blockID).scrollIntoView({ //Знаходить елемент на сторінці, який відповідає цьому id
            behavior: "smooth", //робить прокрутку плавною.
            block: "start" //прокручує до верхньої частини елемента.
        });
    });
}

//Скрипт для кнопки в меню
const cards = document.querySelectorAll(".menu_btn"); //це змінна, яка містить всі елементи з класом .menu_btn

cards.forEach((btn) => { //Перебирає кожну кнопку у списку.
    btn.addEventListener("click", () => {
        btn.innerHTML = "У КОРЗИНІ";
        btn.style.backgroundColor = "#47a147";
    });
});




