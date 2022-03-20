const quotes = [
  {
    quote: "The real world is much smaller than the imaginary.",
    author: "-Friedrich Nietzsche-",
  },
  {
    quote:
      "People always call it luck when you've acted more sensibly than they have.",
    author: "-Anne Tyler-",
  },
  {
    quote: "Leisure is the mother of philosophy.",
    author: "-Thomas Hobbes-",
  },
  {
    quote:
      "Opportunity is missed by most people because it is dressed in overalls and looks like work.",
    author: "-Thomas A. Edison-",
  },
  {
    quote:
      "There is only one success - to be able to spend your life in your own way.",
    author: "-Christopher Morley-",
  },
  {
    quote: "Everything comes to him who hustles while he waits.",
    author: "-Thomas A. Edison-",
  },
  {
    quote: "Small opportunities are often the beginning of great enterprises.",
    author: "-Demosthenes-",
  },
  {
    quote: "Punctuality is the soul of business.",
    author: "-Thomas Halyburton-",
  },
  {
    quote:
      "All that is straight lies. All truth is crooked; time itself is a circle.",
    author: "-Friedrich Nietzsche-",
  },
  {
    quote: "Time is the most valuable thing a man can spend.",
    author: "-Theophrastus-",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerHTML = todayQuote.quote;
author.innerHTML = todayQuote.author;
