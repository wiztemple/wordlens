
let word = 'hello';
const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

// (function () {
//     function init() {
//         console.log('Loaded....')
//     }
//     init();
// }());

const app = () => {
  const fetchWord = async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  }
  fetchWord();
}
window.addEventListener('DOMContentLoaded', app);
