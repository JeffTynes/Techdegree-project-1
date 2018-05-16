// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
const quoteBox = document.getElementById('quote-box');
const body = document.getElementsByTagName('BODY')[0];

const quotes = [
	{quote: 'The secret of getting ahead is getting started', source: 'Mark Twain'},
	{quote: 'The truth is rarely pure and never simple', source: 'Oscar Wilde'},
	{quote: 'No act of kindnes, no matter how small, is ever wasted', source: 'Aesop'},
	{quote: 'If opportunity doesn\'t knock, build a door', source: 'Milton Berle'},
	{quote: 'The measure if who we are is what we do with what we have', source: 'Vince Lombardi'},
	{quote: 'Look deep into nature, and then you will understand everything better', source: 'Albert Einstein'}
];

function getRandomQuote() {
	return quotes[Math.floor(Math.random() * quotes.length)];
}

function printQuote() {
	const quote = getRandomQuote();
	let quoteHtml = `<p class='quote'> ${quote.quote} </p>`;
	quoteHtml += `<p class='source'> ${quote.source}`;
	quoteHtml += quote.citation ? `<span class='citation'> ${quote.citation} </span>` : '';
	quoteHtml += quote.year ? `<span class='year'> ${quote.year} </span>` : '';
	quoteHtml += '</p>';
	quoteBox.innerHTML = quoteHtml;
}
printQuote();

