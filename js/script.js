/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
Katherine Seibel, 2023
******************************************/

/*** 
 * The`quotes` array of objects provides five quotes with attributions. 
 * Year and citation could not be found for the majority of the following quotes.
***/
var quotes = [
  { 
    quote: 'Don\'t wait until you\'ve reached your goal to be proud of yourself. Be proud of every step you take toward reaching that goal.',
    source: 'Simone Biles',
    year:'2022',
    occupation: 'Olympic Gymnast'
  },
  { 
    quote: 'Breathe. Let go. And remind yourself that this very moment is the only one you know you have for sure.',
    source: 'Oprah Winfrey',
    occupation: 'Talk-Show Host'
  },
  { 
    quote: 'We die. That may be the meaning of life. But we do language. That may be the measure of our lives.',
    source: 'Toni Morrison',
    citation: 'Nobel Lecture',
    year:'1993',
    occupation: 'Author'
  },
  { 
    quote: 'It is so liberating to really know what I want, what truly makes me happy, what I will not tolerate. I have learned that it is no one else\'s job to take care of me but me.',
    source: 'Beyonce Knowles',
    occupation: 'Singer-Songwriter'
  },
  { 
    quote: 'When I dare to be powerful — to use my strength in the service of my vision, then it becomes less and less important whether I am afraid.',
    source: 'Audre Lorde',
    occupation: 'Feminist and Civil Rights Activist'
  },
  { 
    quote: 'Hate is too great a burden to bear. It injures the hater more than it injures the hated.',
    source: 'Coretta Scott King',
    occupation: 'Civil Rights Activist'
  },
];

/***
 *The `getRandomQuote` function creates a random number. 
 * The random number is used to return a random quote object from the quotes array.
***/
function getRandomQuote (){
  const randomNumber = Math.floor(Math.random()*(quotes.length));
  const quote = quotes[randomNumber];
  return quote;
}

/***
 *The `printQuote` function provides a radom quote to display in the browser.
***/
 function printQuote (){
  let quoteToDisplay = getRandomQuote();
  let html = 
    `<p class="quote"> ${quoteToDisplay.quote} </p>
    <p class="source">${quoteToDisplay.source}, 
      <span class="occupation">${quoteToDisplay.occupation}</span>
    `
      if (quoteToDisplay.citation) {
        html+= `<span class="citation">${quoteToDisplay.citation}</span>`
      }
      if(quoteToDisplay.year) {
        html+=`<span class="year">${quoteToDisplay.year}</span>`
      } else {
        html+=`</p>`
      }
      document.getElementById('quote-box').innerHTML = html;

      document.body.style.backgroundColor = randomColor();
}

//console.log(printQuote());

/***
 * The `randomColor`function provides a random background color for the page in the browser.
 * ***/
function randomColor(){
  let randomValueForColor1 = Math.floor(Math.random()*256);
  let randomValueForColor2 = Math.floor(Math.random()*256);
  let randomValueForColor3 = Math.floor(Math.random()*256);
  let color = `rgb(${randomValueForColor1}, ${randomValueForColor2}, ${randomValueForColor3})`;
  
  return color;
}

/***
 * The `autoRefresh`variable provides the setInterval() method to refresh the quote on the page in the browser.
 ***/
let autoRefresh = setInterval(printQuote, 2000);

/***
 * click event listener for the print quote button
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);
