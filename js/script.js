/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
Katherine Seibel, 2023
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * The`quotes` array of objects provides five quotes with attributions. 
 * Year and citation could not be found for the bulk majority of the following quotes.
***/

var quotes = [
  { 
    quote: 'Don\'t wait until you\'ve reached your goal to be proud of yourself. Be proud of every step you take toward reaching that goal.',
    source: 'Simone Biles',
    citation: '',
    year:'2022',
    occupation: 'Olympic Gymnast'
  },

  { 
    quote: 'Breathe. Let go. And remind yourself that this very moment is the only one you know you have for sure.',
    source: 'Oprah Winfrey',
    citation: '',
    year:'',
    occupation: 'Talk-Show Host'
  },
  { 
    quote: 'I get angry about things, then go on and work.',
    source: 'Toni Morrison',
    citation: '',
    year:'',
    occupation: 'Author'
  },
  { 
    quote: 'It is so liberating to really know what I want, what truly makes me happy, what I will not tolerate. I have learned that it is no one else\'s job to take care of me but me.',
    source: 'Beyonce Knowles',
    citation: '',
    year:'',
    occupation: 'Singer-Songwriter'
  },
  { 
    quote: 'When I dare to be powerful — to use my strength in the service of my vision, then it becomes less and less important whether I am afraid.',
    source: 'Audre Lorde',
    citation: '',
    year:'',
    occupation: 'Feminist and Civil Rights Activist'
  },
  { 
    quote: 'Hate is too great a burden to bear. It injures the hater more than it injures the hated.',
    source: 'Coretta Scott King',
    citation: '',
    year:'',
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
    <p class="source">${quoteToDisplay.source}
    `
      if (quoteToDisplay.occupation) {
        html+= `<span class="occupation">, ${quoteToDisplay.occupation}</span>`
      }
      if(quoteToDisplay.year) {
        html+=`<span class="year">${quoteToDisplay.year}</span>`
      } else {
        html+=`</p>`
      }
      document.getElementById('quote-box').innerHTML = html;
}

//console.log(printQuote());

/***
 * The `randomColor`function provides a random background color for the page in the browser.
 ***/

let randomValueForColor = ()=>Math.floor(Math.random()*256);

function randomColor(){
  let color = 'rgb(${randomValueForColor}, {randomValueForColor}, {randomValueForColor})';
  document.body.style.backgroundColor = color;
}

/***
 * The `autoRefresh`variable provides the setInterval() method to refresh the quote on the page in the browser.
 ***/

let autoRefresh = setInterval(printQuote, 1000);

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);
