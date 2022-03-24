let dice = document.querySelector('.dice');
let id = document.querySelector('.id-no');
let adviceContent = document.querySelector('.advice-content');
const url = 'https://api.adviceslip.com/advice';



dice.addEventListener('click', () => {
     getAdvice()
     .then(data => {  
               id.innerHTML = `# ${data.slip.id}`;
               adviceContent.innerHTML = data.slip.advice;
          })
          .catch(err => alert('network error, try again!'))
     })


async function getAdvice() {
     const response = await fetch(url);
     const data = await response.json();

     return data
}

//  promise


// dice.addEventListener('click', function() {
//      fetch(url)
//           .then(response => response.json())
//           .then(data => {
//                id.innerHTML = `# ${data.slip.id}`;
//                adviceContent.innerHTML = data.slip.advice;
//           })
//           .catch(err => alert('wait for 2sec before before spinning again'))
// });