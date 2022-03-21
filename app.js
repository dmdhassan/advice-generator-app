let dice = document.querySelector('.dice');
let id = document.querySelector('.id-no');
let adviceContent = document.querySelector('.advice-content');
const advice_url = 'https://api.adviceslip.com/advice';


dice.addEventListener('click', function() {
     fetch(advice_url)
          .then(response => response.json())
          .then(data => {
               id.innerHTML = `# ${data.slip.id}`;
               adviceContent.innerHTML = data.slip.advice;
          })
          .catch(err => alert('wait for 2sec before before spinning again'))
});




// async function getAdvice(url) {
//      const response = await fetch(url);
//      let data = await response.json();

//      id.innerHTML = `# ${data.slip.id}`;
//      adviceContent.innerHTML = data.slip.advice;

     
// }

