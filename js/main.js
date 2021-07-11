const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);
const setActive = () => {
  images[index].classList.add("active");
};
// testmonials
let index = 1;
const images = document.querySelectorAll(".img");
images.forEach((img) => {
  img.addEventListener("click", () => {
    index = Array.from(images).indexOf(img);
    setText();
    removeActive();
    setActive();
  });
});

// remove active classes
const removeActive = () => {
  images.forEach((img) => {
    img.classList.remove("active");
  });
};

// persons
const persons = [
  {
    name: "Reda Elemawy",
    paragraph:
      "Best place to deal with , I suggest people to personally visit the Website and share your own experience. Everyone should explore and see these people.",
  },
  {
    name: "Sara Shalaby",
    paragraph:
      "Great location and very courteous staff. I had to wait in the lobby on the ground floor and the security guard switched on the extra ac to keep me comfortable. ",
  },
  {
    name: "Ahmed Sami",
    paragraph:
      "Plus quality is definitely a well thought innovative idea put out to reality. The staff is polite and helpful; and the atmosphere is an apt mix of comfort and speed required for one to focus on their task. ",
  },
  {
    name: "Menna Ali",
    paragraph:
      "Plus Peaple provides a wonderful infrastructure and a work friendly environment. It maintains a standard quality of hygiene and is always clean. ",
  },
];

const setText = () => {
  let quoteAuthor = document.querySelector(".quote__author");
  let quoteText = document.querySelector(".quote__text");
  quoteAuthor.innerHTML = persons[index].name;
  quoteText.innerHTML = persons[index].paragraph;
};
setText();

setActive();
