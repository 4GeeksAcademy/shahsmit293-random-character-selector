/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // this are the characters to randomly select from...
  const characters = [
    {
      name: "Mrs. Brown",
      image: "https://randomuser.me/api/portraits/women/17.jpg",
      description: "loves to read about history and philosophy"
    },
    {
      name: "Andrew",
      image: "https://randomuser.me/api/portraits/men/25.jpg",
      description: "tall, a real state agent"
    },
    {
      name: "Sam",
      image: "https://randomuser.me/api/portraits/men/52.jpg",
      description: "short, vice president of AT&T sales"
    },
    {
      name: "Margie",
      image: "https://randomuser.me/api/portraits/women/42.jpg",
      description: "short, works as a designer for some company"
    }
  ];

  var selectedCharacter =
    characters[Math.floor(Math.random() * characters.length)];

  var title = document.querySelector("div.card-body h5.card-title");
  title.textContent = selectedCharacter.name;

  var descriptionElement = document.querySelector("div.card-body p.card-text");
  descriptionElement.textContent = selectedCharacter.description;

  var image = document.querySelector("#character-image");
  image.src = selectedCharacter.image;
};
