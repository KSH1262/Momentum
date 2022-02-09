const quotes = [
    {
        quote: "In the end, it's not the years in your life that count. It's the life in your years.",
        author: "- Abraham Lincoln",
    },
    {
        quote: "You will face many defeats in life, but never let yourself be defeated.",
        author: "- Maya Angelou",
    },
    {
        quote: "Don't be afraid to give up the good to go for the great.",
        author: "- John D. Rockefeller",
    },
    {
        quote: "The road to success and the road to failure are almost exactly the same.",
        author: "- Colin R. Davis",
    },
    {
        quote: " Keep your eyes on the stars and your feet on the ground.",
        author: "- Theodore Roosevelt",
    },
    {
        quote: "Life is from the inside out. When you shift on the inside, life shifts on the outside.",
        author: "- Kamal Ravikant",
    },
    {
        quote: "Life is either a great adventure or nothing.",
        author: "- Helen Keller",
    },
    {
        quote: "Being happy never goes out of style.",
        author: "- Lilly Pulitzer",
    },
    {
        quote: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
        author: "- Thomas A. Edison",
    },
    {
        quote: "Life can only be understood backwards; but it must be lived forwards.",
        author: "- Søren Kierkegaard",
    },
    {
        quote: 'I never dreamed about success, I worked for it',
        author: '- Estee Lauder'
    },
    {
        quote: 'Do not try to be original, just try to be good.',
        author: '- Paul Rand'
    },
    {
        quote: 'Do not be afraid to give up the good to go for the great',
        author: '- John D. Rockefeller'
    },
    {
        quote: 'If you cannot fly then run. If you cannot run, then walk. And if you cannot walk, then crawl, but whatever you do, you have to keep moving forward.',
        author: '- Martin Luther King Jr.'
    },
    {
        quote: 'Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.',
        author: '- Thomas Edison'
    },
    {
        quote: 'The fastest way to change yourself is to hang out with people who are already the way you want to be',
        author: '- REid Hoffman'
    },
    {
        quote: 'Money is like gasoline during a road trip. You do not want to run out of gas on your trip, but you are not doing a tour of gas stations',
        author: '- Tim O Reilly'
    },
    {
        quote: 'Some people dream of success, while other people get up every morning and make it happen',
        author: '- Wayne Huizenga'
    },
    {
        quote: 'The only thing worse than starting something and falling.. is not starting something',
        author: '- SEth Godin'
    },
    {
        quote: 'If you really want to do something, you will find a way. If you do not, you will find an excuse.',
        author: '- Jim Rohn'
     },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const toDaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = toDaysQuote.quote;
author.innerText = toDaysQuote.author;