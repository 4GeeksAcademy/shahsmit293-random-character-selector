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
      description: "loves to read about history and philosophy",
    },
    {
      name: "Andrew",
      image: "https://randomuser.me/api/portraits/men/25.jpg",
      description: "tall, a real state agent",
    },
    {
      name: "Sam",
      image: "https://randomuser.me/api/portraits/men/52.jpg",
      description: "short, vice president of AT&T sales",
    },
    {
      name: "Margie",
      image: "https://randomuser.me/api/portraits/women/42.jpg",
      description: "short, works as a designer for some company",
    },
  ];

  // INSTRUCTIONS
  // randomly choose a character and then update using JS:
  // 1. the card's title with selected character's name
  // 2. the card's image using selected character's image
  // 3. the card's body using selected character's description

  // HELP
  // this is how you set the image src
  // const image = document.querySelector("#character-image")
  // image.src = <url to the image>
};
