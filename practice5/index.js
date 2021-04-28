let dropButton = document.querySelector('.dropdown-btn');
dropButton.addEventListener('click', function () {
    dropButton.nextElementSibling.classList.toggle('changed-dropdown-container')
    dropButton.classList.toggle('active')


})