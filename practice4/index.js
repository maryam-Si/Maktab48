let buttons = document.getElementsByClassName('accordion-btn');
let panels = document.getElementsByClassName('content');
let plus = document.getElementsByClassName('plus')

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        buttons[i].classList.toggle('active')
        buttons[i].nextElementSibling.classList.toggle('show')


    })

}