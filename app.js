let dice = document.querySelector('.dice');
let id = document.querySelector('.id-no');


dice.addEventListener('click', () => {
     let randomId = Math.floor(Math.random() * 365);

     id.innerHTML = `advice # ${randomId}`
});

