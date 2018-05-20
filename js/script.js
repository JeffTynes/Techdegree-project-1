const button = document.getElementById('loadQuote');
const quoteBox = document.getElementById('quote-box');
const body = document.getElementsByTagName('BODY')[0];

button.addEventListener("click", () => {
	printQuote();
	changeBackGround(getRandomColor(), body, button);
	clearTimeout(newQuote);
	newQuote = setInterval(() => {
		printQuote();
		changeBackGround(getRandomColor(), body, button);
	}, 30000);
}, false);

let quotes = [
	{quote: 'The secret of getting ahead is getting started', source: 'Mark Twain'},
	{quote: 'The truth is rarely pure and never simple', source: 'Oscar Wilde', citation: 'The Importance of Being Earnest', year: 1895, tags: '(truth)'},
	{quote: 'No act of kindnes, no matter how small, is ever wasted', source: 'Aesop', citation: 'The Lion and the Mouse', tags: '(kindness)'},
	{quote: 'If opportunity doesn\'t knock, build a door', source: 'Milton Berle', tags: '(motivation)'},
	{quote: 'The measure of who we are is what we do with what we have', source: 'Vince Lombardi', tags: '(inspration)'},
	{quote: 'Look deep into nature, and then you will understand everything better', source: 'Albert Einstein', tags: '(inspration, nature)'}
];

let quoted = [];
let lastQuoted = [];

function getRandomQuote() {
	if(!quotes.length) {
		quotes = quoted;
    quoted = [];
	}

	let quote;

	do {
		quote = quotes[Math.floor(Math.random() * quotes.length)];
	}
	while(quote == lastQuoted[0])

	quoted.push(quote);
	lastQuoted[0] = quote;
	quotes = quotes.filter(el => el !== quote);
	return quote;
}

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

function getRandomColor() {
  let color = '#';
  while(color.length < 7) {
  	color += Math.floor(Math.random() * 16).toString(16);
  }
  return color;
}

function changeBackGround(color, ...args) {
  args.forEach(el => el.style.backgroundColor = color);
}

let newQuote = setInterval(() => {
 printQuote();
 changeBackGround(getRandomColor(), body, button);
}, 30000);

printQuote();
changeBackGround(getRandomColor(), body, button);