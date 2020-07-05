const modal = document.querySelector('.animate__lightSpeedInRight');
const closeBtn = document.querySelector('span');
const showBtn = document.querySelector('button');

closeBtn.addEventListener('click', function () {
    modal.classList.remove('rollIn');
    modal.classList.add('rollOut');
    setTimeout(function() {
        modal.classList.add('hidden');
    }, 1000);
});

showBtn.addEventListener('click', function () {
    modal.classList.remove('rollOut', 'hidden');
    modal.classList.add('animate__lightSpeedInRight', 'rollIn');
});