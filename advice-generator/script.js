'use strict'

const quotesContainer = document.querySelector('.quote');
const btn = document.querySelector('.btn-quote');

const createQuoteTemplate = function(quote = '') {
	quotesContainer.insertAdjacentHTML('beforeend', `<p class="quote__text">❝ ${quote}&nbsp;❞</p>`);
	quotesContainer.style.display = 'flex';
};

const renderQuote = async function() {
	try {
		if (!navigator.onLine) throw new Error('No internet connection');

		const response = await fetch('https://api.adviceslip.com/advice');
		if(!response.ok) throw new Error(`Request failed (${response.status}).`);
		
		const data = await response.json();
		createQuoteTemplate(data.slip?.advice);
	} catch(err) { 
		createQuoteTemplate(`
			${err}.
			Success is not final, failure is not fatal: It is the courage to continue that counts.
			`);
	}	
};

btn.addEventListener('click', function() {
	renderQuote();
	this.setAttribute('disabled', '');
});
