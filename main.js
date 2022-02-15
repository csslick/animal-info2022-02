import {data} from './data.js';

console.log(data);
let html = '';
data.forEach(function(pet){
  html += `
    <div class="info-box">
      <p>${pet.title}</p>
      <p>${pet.category}</p>
      <p>${pet.blood}</p>
      <img src='${pet.imgUrl}' width='200'  height='200' />
    </div>
  `;
});

$('#info').append(html);
