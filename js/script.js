/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/



/***
 * `getRandomQuote` function
***/



/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

var quotes = [
  { 
    quote: '"Don\'t wait until you\'ve reached your goal to be proud of yourself. Be proud of every step you take toward reaching that goal." ',
    source: 'Simone Biles',
    citation: '',
    year:'',
    occupation: 'Olympic Gymnast'
  },

  { 
    quote: '“Breathe. Let go. And remind yourself that this very moment is the only one you know you have for sure.” ',
    source: 'Oprah Winfrey',
    citation: '',
    year:'',
    occupation: 'Talk-Show Host'
  },
  { 
    quote: '“I get angry about things, then go on and work.” ',
    source: 'Toni Morrison',
    citation: '',
    year:'',
    occupation: 'Author'
  },
  { 
    quote: '“It is so liberating to really know what I want, what truly makes me happy, what I will not tolerate. I have learned that it is no one else\'s job to take care of me but me." ',
    source: 'Beyonce Knowles',
    citation: '',
    year:'',
    occupation: 'Singer-Songwriter'
  },
  { 
    quote: '“When I dare to be powerful — to use my strength in the service of my vision, then it becomes less and less important whether I am afraid.” ',
    source: 'Audre Lorde',
    citation: '',
    year:'',
    occupation: 'Feminist and Civil Rights Activist'
  },
  { 
    quote: '“Hate is too great a burden to bear. It injures the hater more than it injures the hated.” ',
    source: 'Corretta Scott King',
    citation: '',
    year:'',
    tag: 'Civil Rights Activist'
  },
];

//console.log(quotes);

function getRandomQuote