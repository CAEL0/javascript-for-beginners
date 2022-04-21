const quotes = [
    {
        quote: "Love For All, Hatred For None.",
        author: "Khalifatul Masih III",
    },
    {
        quote: "Change the world by being yourself.",
        author: "Amy Poehler",
    },
    {
        quote: "Every moment is a fresh beginning.",
        author: "T.S Eliot",
    },
    {
        quote: "Never regret anything that made you smile.",
        author: "Mark Twain",
    },
    {
        quote: "Everything you can imagine is real.",
        author: "Pablo Picasso",
    },
    {
        quote: "Simplicity is the ultimate sophistication.",
        author: "Leonardo da Vinci",
    },
    {
        quote: "Whatever you do, do it well.",
        author: "Walt Disney",
    },
    {
        quote: "What we think, we become.",
        author: "Buddha",
    },
    {
        quote: "All limitations are self-imposed.",
        author: "Oliver Wendell Holmes",
    },
    {
        quote: "Tough times never last but tough people do.",
        author: "Robert H. Schiuller",
    },
    {
        quote: "One day the people that don’t even believe in you will tell everyone how they met you.",
        author: "Johnny Depp",
    },
    {
        quote: "If I’m gonna tell a real story, I’m gonna start with my name.",
        author: "Kendrick Lamar",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
