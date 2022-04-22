const images = [
    "astronomy.jpg",
    "black.jpg",
    "forest.jpg",
    "milky-way.jpg",
    "ocean.jpg",
    "wood.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");
bgImage.id = "background";
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
