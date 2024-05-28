const sentences = ["Time is money", "I am tired", "Money will come from heaven", "Today is thunder storm", "You worked too much.", "You need to study hard", "sleeping is the best"];
const btn = document.getElementById('btn');
const sentence = document.querySelector('.sentence');

const colors = ["blue", "red", "green", "yellow", "purple", "orange", "gray"]

btn.addEventListener('click', function (){
   const randomSentences = getRandomSentences();
   const randomColors = getRandomColors();
   document.body.style.backgroundColor = colors[randomColors];
   sentence.textContent = sentences[randomSentences];
 })


function getRandomSentences(){
    return Math.floor(Math.random() * sentences.length);
}
function getRandomColors(){
    return Math.floor(Math.random() * colors.length);
}