//get refrences to the button, quote box and body from the html 
const button = document.getElementById('loadQuote');
const quoteBox = document.getElementById('quote-box');
const body = document.getElementsByTagName('BODY')[0];

//On button click, button calls printQuote, changeBackGround with a color and
//what should have it's background changes

//clears and sets a new timeout so the new quote is still displayed for 30s
button.addEventListener("click", () => {
	printQuote();
	changeBackGround(getRandomColor(), body, button);
	clearTimeout(newQuote);
	newQuote = setInterval(() => {
		printQuote();
		changeBackGround(getRandomColor(), body, button);
	}, 30000);
}, false);


//array of quotes
let quotes = [
	{quote: 'The secret of getting ahead is getting started', source: 'Mark Twain', 
	  tags: '(motivation)'},
	{quote: 'The truth is rarely pure and never simple', source: 'Oscar Wilde', 
	  citation: 'The Importance of Being Earnest', year: 1895, tags: '(truth)'},
	{quote: 'No act of kindness, no matter how small, is ever wasted', source: 'Aesop', 
	  citation: 'The Lion and the Mouse', tags: '(kindness)'},
	{quote: 'If opportunity doesn\'t knock, build a door', source: 'Milton Berle', 
	  tags: '(motivation)'},
	{quote: 'The measure of who we are is what we do with what we have', source: 'Vince Lombardi', 
	  tags: '(inspiration)'},
	{quote: 'Look deep into nature, and then you will understand everything better', source: 'Albert Einstein', 
	  tags: '(inspiration, nature)'},
	{quote: 'You only live once, but if you do it right, once is enough', source: 'Mae West', 
	  tags: '(life, inspiration)'},
	{quote: 'We accept the love we think we deserve', source: 'Stephen Chbosky', 
	  citation: 'The Perks of being a Wallflower', year: 2012, tags: '(love)'},
	{quote: 'And, when you want something, all the universe conspires in helping you to achieve it', source: 'Paulo Coelho', 
	  citation: 'The Alchemist', year: 2005, tags: '(inspiration)'},
	{quote: 'You never got what you wanted; you just learned to get by without it', source: 'Celeste Ng', 
	  citation: 'Everything I never told you', year: 2014, tags: '(acceptance)'}

];

let quoted = [];
let lastQuoted = [];

function getRandomQuote() {
	// if all quotes have been displayed, reset quotes and quoted
	if(!quotes.length) { 
		quotes = quoted;
    quoted = [];
	}

	let quote;

	//makes sure when quotes is refreshed, the first quote can't be the last quote displayed
	do {
		quote = quotes[Math.floor(Math.random() * quotes.length)];
	}
	while(quote == lastQuoted[0]) 

	quoted.push(quote);
	lastQuoted[0] = quote;
	//filters out the quote from the list of quotes to display
	quotes = quotes.filter(el => el !== quote);
	return quote;
}

//calls getRandomQuote and the return value to the console
//builds up a string from quote and sets quoteBox.innerHTML to the string
function printQuote() {
	const quote = getRandomQuote();
	console.log(quote.quote);
	let quoteHtml = `<p class='quote'> ${quote.quote} </p>`;
	quoteHtml += `<p class='source'> ${quote.source}`;
	quoteHtml += quote.citation ? `<br/><span class='citation'> ${quote.citation} </span>` : '';
	quoteHtml += quote.year ? `<span class='year'> ${quote.year} </span>` : '';
	quoteHtml += quote.tags ? `<span class='tags'> ${quote.tags} </span>` : '';
	quoteHtml += '</p>';
	quoteBox.innerHTML = quoteHtml;
}

//generates a random hexadecimal color
function getRandomColor() {
  let color = '#';
  while(color.length < 7) {
  	color += Math.floor(Math.random() * 16).toString(16);
  }
  return color;
}

//the first arg is the color to change to and the other args are what elements to target
//doesn't call getRandomColor itself so you could pass in specific colors if desired 
function changeBackGround(color, ...args) {
  args.forEach(el => el.style.backgroundColor = color);
}

//setInterval to display a new quote and background every 30s
let newQuote = setInterval(() => {
 printQuote();
 changeBackGround(getRandomColor(), body, button);
}, 30000);

//call printQuote and changeBackGround once so there's a random quote and color
//on page load
printQuote();
changeBackGround(getRandomColor(), body, button);